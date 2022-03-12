
import { Feed } from './feed'
import { Share } from './share'


export function AskingMain() {
    const category = { category: "hearingimpairment" }
    return (
        <div>
            {localStorage.getItem("idLogged") !== "" &&
                <Share />

            }

            <Feed {...category} />
        </div>
    )
}

