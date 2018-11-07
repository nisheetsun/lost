import { NodeTemplate } from "l3p-core"

export default class ExampleRunningView {
    constructor(model) {
        this.html = new NodeTemplate(`
            <div>
                <h1>RUNNING</h1>
                <h3 data-ref="title">${model.title}</h3>
                <p data-ref="info">${model.text.value}</p>
            </div>
        `)
        // the parent node gets defined after adding the node to
        // the graph by the nodes presenter.
        // all view events will be delegated to the parent node.
        this.parentNode = undefined
    }
    setInfoText(text) {
        $(this.parentNode).find("[data-ref='info']")[0].textContent = text
    }
}