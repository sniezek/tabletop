import React, { PureComponent } from "react";
import { Dialog as MDLDialog } from "react-mdl/lib/Dialog";
import dialogPolyfill from "dialog-polyfill/dialog-polyfill";

class Dialog extends PureComponent {
    constructor(props) {
        super(props);

        this.dialog = null;
        this.setRef = this.setRef.bind(this);
    }

    componentDidMount() {
        if (this.dialog && !this.dialog.showDialog) {
            dialogPolyfill.registerDialog(this.dialog);
        }
    }

    setRef(dialog) {
        if (dialog && dialog.dialogRef) {
            this.dialog = dialog.dialogRef;
        }
    }

    render() {
        return (
            <MDLDialog
                {...this.props}
                ref={this.setRef}
            />
        );
    }
}

export default Dialog;
