import { throttle } from "lodash";

export const renderPredictions = (predictions, context) =>{
    context.clearRect(0,0,context.canvas.width, context.canvas.height);

    //font for canvas

    const font = "16px sans-serif";
    context.font = font;
    context.textBaseline = "top";

    predictions.forEach((predict) =>{
        const [x,y,width,height] = predict["bbox"];

        const isPerson = predict.class === "person";

        const isBook = predict.class === "book";

        //bounding box

        context.strokeStyle = isBook ? "#FF0000" : "#00FFFF";
        context.lineWidth = 4;
        context.strokeRect(x,y,width,height);

        //fill color
        context.fillStyle = `rgba(255,0,0, ${isBook ? 0.2 : 0})`;
        context.fillRect(x,y,width,height);

        //draw the label

        context.fillStyle = isBook ? "#FF0000" : "#00FFFF";
        const textWidth = context.measureText (predict.class).width;
        const textHeight = parseInt(font,10);
        context.fillRect(x,y, textWidth + 4, textHeight + 4);

        context.fillStyle = "#000000";
        context.fillText(predict.class, x,y);

        if(isBook) {
            playAudio();
        }
    });
}

const playAudio = throttle(() =>{
    const audio = new Audio("/abookaudio.mp3")
    audio.play();
}, 1000);