/**
 * @file interface/dialogs/manageChildren.js
 * 
 * @overview manages dialogues related to adding, removing, and selecting children
 * 
 * Assumptions: - JQuery has been loaded 
 *      				- interface/modal.js has been loaded
 *     					- interface/toast.js has been loaded
 *  						- db/actions/smartwatch.js has been loaded
 *     					- db/actions/child.js has been loaded
 * 							- db/dataStorage.js has loaded
 * 							
 */
((window, document) => {
	let parent = localStorage.getItem("userID"); //  getting parent name from localStorage

	//  ADDING A CHILD
	$("#addChild").click(e => { //  when #addChild is clicked
		showModal("addChild.html#form", "30%", async () => { //  change the size of the modal accordingly
			showLoading(); //  show loading screen.//  from interface/modal.js
			const availableWatches = await readSmartwatch({ key: parent }); //  get available watches //  from db/actions/smartwatch.js
			availableWatches.rows.forEach(item => { //  fill the watches in a select panel 
				console.log('item: ', item);
				
				$("#smartwatchSN").append(
					`<option value=${item.id}> ${item.value} </option>`
				);
			})
			hideLoading(false); //  hide loading screen but keep the container. //  from interface/modal.js
			$("#leftButton").click(async (e) => { //  when the left button is clicked 
				showLoading(); //  show loading screen.//  from interface/modal.js
				try {
					const child = await createChild({ //  try to create child //  from db/actions/child.js
						Parent: parent,
						Smartwatch: $("#smartwatchSN").val(),
						name: $("#childName").val()
					});
					//  on success
					newToast(`"${$("#childName").val()}" has been added successfully.`); //  give a notification. //  from interface/toast.js
					$("#currentChild").trigger(events.childListUpdated); //  fire event to update droplist
				} catch (err) {
					//  on fail
					newToast(`failed to add "${$("#childName").val()}".\n ${err.message}`); //  show failure in toast. //  from interface/toast.js
				} finally {
					hideLoading(false); //  hide loading screen but keep the container. //  from interface/modal.js
					hideModal(); //  hide the modal once everything is done
				}
			});
			$("#rightButton").click(e => { //  on button click
				hideModal(); //  hide modal //  from interface/modal.js
			});
		});
	});


	//  REMOVING A CHILD
	$("#removeChild").click(e => { //  when #removeChild is clicked
		showModal("removeChild.html#form", "25%", async () => { //  change the size of the modal accordingly
			$("#childDeletion").html( //  to alter the message in html/components/modals/removeChild.html
        `<b>${localStorage.getItem("currentChild")}</b>`
      );
			$("#leftButton").click(async (e) => { //  when the left button is clicked 
				showLoading(); //  show loading screen.//  from interface/modal.js
				const child = localStorage.getItem("currentChild")
				console.log('child: ', child);
				try {
					const childToRemove = await destroyChild({ //  try to delete child //  from db/actions/child.js
						name: child
					});
					//  on success
					newToast(`"${child}" has been removed successfully.`); //  give a notification. //  from interface/toast.js
					$("#currentChild").empty().trigger(events.childListUpdated); //  fire event to update droplist
					//  removing from local storage
					localStorage.removeItem("currentChild");
					localStorage.removeItem("currentSmartwatch");
				} catch (err) {
					//  on fail
					newToast(`failed to remove "${child}".\n ${err.message}`); //  show failure in toast. //  from interface/toast.js
					console.error('err: ', err);
				} finally {
					hideLoading(false); //  hide loading screen but keep the container. //  from interface/modal.js
					hideModal(); //  hide the modal once everything is done
				}
			});
			$("#rightButton").click(e => { //  on button click
				hideModal(); //  hide modal //  from interface/modal.js
			});
		});
	});

	$("#currentChild").change(e => { //  when the user chooses an item from the droplist
		const childNames = dataStorage.childList.map(item => item.name); //  getting all stored children names. //  from db/dataStorage.js
		const childIdx = childNames.indexOf($("#currentChild").val()); //  finding the index of the chosen child. //  from db/dataStorage.js
		localStorage.setItem("currentChild", dataStorage.childList[childIdx].name); //  saving the child
		localStorage.setItem("currentSmartwatch", dataStorage.childList[childIdx].Smartwatch); //  saving the smartwatch
	})
})(this, this.document);