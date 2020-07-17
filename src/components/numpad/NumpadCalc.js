import React, { Component } from "react";
import Button from "../button/Button";

class NumpadCalc extends Component {
  render() {
    const { onClickNum, onClickRes } = this.props;
    return (
      <div>
        <div>
          <Button text="(" onClick={onClickNum} />
          <Button text=")" onClick={onClickNum} />
          <Button text="C" onClick={onClickNum} />
          <Button text="CE" onClick={onClickNum} />
        </div>
        <div>
          <Button text="xⁿ" onClick={onClickNum} />
          <Button text="e" onClick={onClickNum} />
          <Button text="π" onClick={onClickNum} />
          <Button text="%" onClick={onClickNum} />
        </div>
        <div>
          <Button text="7" onClick={onClickNum} />
          <Button text="8" onClick={onClickNum} />
          <Button text="9" onClick={onClickNum} />
          <Button text="/" onClick={onClickNum} />
        </div>
        <div>
          <Button text="4" onClick={onClickNum} />
          <Button text="5" onClick={onClickNum} />
          <Button text="6" onClick={onClickNum} />
          <Button text="*" onClick={onClickNum} />
        </div>
        <div>
          <Button text="1" onClick={onClickNum} />
          <Button text="2" onClick={onClickNum} />
          <Button text="3" onClick={onClickNum} />
          <Button text="-" onClick={onClickNum} />
        </div>
        <div>
          <Button text="0" onClick={onClickNum} />
          <Button text="." onClick={onClickNum} />
          <Button text="=" onClick={onClickRes} />
          <Button text="+" onClick={onClickNum} />
        </div>
      </div>
    );
  }
}

export default NumpadCalc;
