import { BaseModal } from "pipRoot/l3pfrontend/index"


export default class LoopStartModal extends BaseModal {
    constructor(nodeModel){
        const params = {
            visible: false,
            title: "Loop",
            content: `
                <table class="table table-hover">
                    <tbody>
                        <tr>
                            <td style="vertical-align: middle">
                                <strong> Max Iteration: </strong>
                            </td>
                            <td>
                                <input ${nodeModel.loop.maxIteration? '':'disabled placeholder="exit condition is in script"'} data-ref="max-iteration" class='labelmax form-control' type='number' name='max_label' min='0' value='${nodeModel.loop.maxIteration}'>
                            </td>
                        </tr>
                    </tbody>
                </table>`               
        }

        super(params)
    }

    
}