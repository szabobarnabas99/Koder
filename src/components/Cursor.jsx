import React, { useEffect, useState } from "react";

function Cursor() {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [deviceType, setDeviceType] = useState("");
    const [isClicking, setIsClicking] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(false);

    // check if it is a touch device
    const isTouchDevice = () => {
        try {
            document.createEvent("TouchEvent");
            setDeviceType("touch");
            return true;
        } catch (e) {
            setDeviceType("mouse");
            return false;
        }
    };

    const move = (e) => {
        const touchEvent = e.touches ? e.touches[0] : null;
        const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
        const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

        setCursorX(x);
        setCursorY(y);

        // Set the cursor border's position directly
        const cursorBorder = document.getElementById("cursor-border");
        if (cursorBorder) {
            cursorBorder.style.left = `${x}px`;
            cursorBorder.style.top = `${y}px`;
        }
    };

    const handleMouseDown = () => {
        setIsClicking(true);
    };

    const handleMouseUp = () => {
        setIsClicking(false);
    };

    const handleButtonHover = (hovered) => {
        setButtonHovered(hovered);
    };

    useEffect(() => {
        document.addEventListener("mousemove", move);
        document.addEventListener("touchmove", move);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("touchmove", move);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <div>
            <style>
                {`
		* {
			margin: 0;
			cursor: none;
		}

		body {
			
			height: 100vh;
			overflow: hidden;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		#cursor {
			position: absolute;
			background-color: ${
                (buttonHovered ? "red" : "transpaternt",
                isClicking ? "red" : "blue")
            };
            border: 3px solid ${
                (isClicking ? "red" : "blue",
                buttonHovered ? "red" : "transparent")
            };
			height: 24px;
			width: 24px;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			pointer-events: none;
			transition: background-color 0.2s ease;
		}

	
	`}
            </style>
            <div
                id="cursor"
                style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
            ></div>
            <div id="cursor-border"></div>

            <button
                onMouseEnter={() => handleButtonHover(true)}
                onMouseLeave={() => handleButtonHover(false)}
                style={{
                    backgroundColor: buttonHovered ? "green" : "red",
                    color: "white",
                    padding: "10px 20px",
                    border: "2px solid white",
                    borderRadius: "5px",
                    cursor: "none",
                }}
            >
                Button
            </button>
        </div>
    );
}

export default Cursor;
