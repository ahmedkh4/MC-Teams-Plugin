import * as React from "react";
import { Button } from "@fluentui/react-northstar";

export default function Modal(): JSX.Element {
  return (
    <div>
     <div className="modal">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <Button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </Button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <Button type="button" className="btn btn-primary">Save changes</Button>
        <Button type="button" className="btn btn-secondary" data-dismiss="modal">Close</Button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
