/*
HTML of an astronaut list item.
replace the instances that have "THIS FORMAT HERE" with the astronautData.

<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="PROFILE THUMBNAIL HERE" class="rounded float-start" alt=""">    
        <h5 class="mb-1">ASTRONAUT NAME (ASTRONAUT STATUS HERE)</h5>
        <small class="float-end">born DATE OF BIRTH HERE</small>
    </div>
    <small>ASTRONAUT NATIONALITY HERE (ASTRONAUT AGENCY NAME)</small>    
    <p class="mb-1">ASTRONAUT BIO HERE </p>
</li>
*/

/**
 * 
 * @param {{name:string, bio:string, agency:string, status:string, date_of_birth:string, in_space:string, nationality:string, profile_image_thumbnail:string}} astronautData Information about a single astronaut
 * @param {HTMLUListElement} listElement 
 */
const renderAstronautListItem = function(astronautData, listElement) {
    // TODO: complete this function stub
    const { name, bio, agency, status, date_of_birth, in_space, nationality, profile_image_thumbnail } = astronautData; // using Object Destructuring
    const listItem = `<li class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <img src="${profile_image_thumbnail}" class="rounded float-start" alt="${name} thumbnail" />
            <h5 class="mb-1">${name}</h5>
            <small class="float-end">born ${date_of_birth}</small>
        </div>
        <small>${nationality} (${agency.name})</small>
        <p class="mb-1">${bio}</p>
    </li>`
    listElement.innerHTML += listItem;
}

export { renderAstronautListItem }
