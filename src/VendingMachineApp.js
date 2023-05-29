import React from "react";
import { Link } from "react-router-dom";

/** App for generating vending machine items.
 *
 * app -> VendingMachineApp -> { CliffBar, Ashwaganda, YerbaMate }
 */

function VendingMachineApp() {
  return (
    <div className="Items">
      <h3>Vending Vending Machine!</h3>
      <div className="cliffbar-link">
        <Link to="/cliffbar">Cliff Bar</Link>
      </div>
      <div className="ashwaganda-link">
        <Link to="/ashwaganda">Ashwaganda</Link>
      </div>
      <div className="yerbamate-link">
        <Link to="/yerbamate">Yerba Mate</Link>
      </div>
    </div>
  );
}

export default VendingMachineApp;