import axios from "axios";


export let Id = { id: localStorage.getItem("idLogged") };


export function setId(id: string) {
    const localId = localStorage.getItem("idLogged")
    localId ? Id.id = localId : Id.id = id

}



export function getId() {

    return Id
}

