
import React, { useState } from "react";
import StyledBox from "./styledbox";
import StyledInput from "./styledinput";
import StyledButton from "./styledbutton";

const BoxGenerator = props => {
    const colorField = React.createRef();
    const widthField = React.createRef();

    const [state, setState] = useState({
        boxes: [],
        newColor: "",
        newWidth: 0
    });

    const onClickHandler = e => {
        try {
        e.preventDefault();
        setState({
            boxes: [...state.boxes, {
            color: state.newColor,
            width: state.newWidth
            }],
            newColor: "",
            newWidth: 0
        });
        colorField.current.value = "";
        widthField.current.value = "";
        }
        catch{
        console.error();
        }
    };
    const onChangeColorHandler = e => {
        e.preventDefault();
        setState({
        ...state,
        newColor: e.target.value
        });
    };
    const onChangeWidthHandler = e => {
        e.preventDefault();
        setState({
        ...state,
        newWidth: e.target.value
        });
    };
    return (
        <div>
        <h1>Add a new box!</h1>
        <StyledInput
            ref={colorField}
            onChange={onChangeColorHandler}
            placeholder="Color. Ex: red, green, blue..."
        />
        <StyledInput
            ref={widthField}
            onChange={onChangeWidthHandler}
            placeholder="Width. Ex: 20px, 100px, 50px..."
        />
        <StyledButton onClick={onClickHandler}>Submit</StyledButton>
        <div>
            {state.boxes.map((box, index) => (
            <StyledBox
                key={index}
                bgColor={box.color}
                width={box.width}
                height={box.width}
            ></StyledBox>
            ))}
        </div>
        </div>
    );
    };

export default BoxGenerator;