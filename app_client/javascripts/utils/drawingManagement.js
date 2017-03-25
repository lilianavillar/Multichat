/**
 * Created by UO232510 on 21/03/2017.
 */
function DrawingManagement(ws) {
    var canvas = new fabric.Canvas('canvas');
    canvas.setHeight(350);
    canvas.setWidth(350);
    canvas.freeDrawingBrush.color = 'green';
    canvas.freeDrawingBrush.lineWidth = 10;
    this.addCircle = function() {
        var obj = {
            radius: 20,
            fill: 'green',
            left: 100,
            top: 100
        };
        sendData('Circle', obj, 'add');
    };
    this.addRectangle = function() {
        var obj = {
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'red'
        };
        sendData('Rectangle', obj, 'add');
    };
    this.addTriangle = function() {
        var obj = {
            width: 20,
            height: 30,
            fill: 'blue',
            left: 50,
            top: 50
        };
        sendData('Triangle', obj, 'add');
    };
    this.addHeart = function () {
        var obj = {
        points: [
                { x: 10, y: 80 },
                { x: 10, y: 110 },
                { x: 30, y: 130 },
                { x: 60, y: 130 },
                { x: 80, y: 110 },
                { x: 100, y: 130 },
                { x: 130, y: 130 },
                { x: 150, y: 110 },
                { x: 150, y: 80 },
                { x: 80, y: 10 }
            ],
        options: {
            fill: 'pink',
            left: 200,
            top: 200,
            angle: 180
            }
        };
        sendData('Heart', obj, 'add');
    };
    this.getPencil = function() {
        canvas.isDrawingMode = true;
    };
    this.getSelection = function() {
        canvas.isDrawingMode = false;
    };
    this.clearFigure = function (type, info) {
        sendData('', '', 'clearFigure');
    };
    this.clearAll = function(type, info) {
        sendData('', '', 'clearAll');
    };
    this.sendDownload = function(type, info){
        sendData('', '', 'download');
    }
    this.addObject = function(type, info) {
        var shape;
        if(type == 'Triangle') {
            shape = new fabric.Triangle(info);
        }
        else if(type == 'Rectangle') {
            shape = new fabric.Rect(info);
        }
        else if(type == 'Circle') {
            shape = new fabric.Circle(info);
        }
        else if(type == 'Heart') {
            shape = new fabric.Polygon(info.points, info.options);
        }
        canvas.add(shape);
    };
    this.clearObject = function(type, info){
        canvas.remove(canvas.getActiveObject());
    };
    this.clearObjects = function(type, info) {
        canvas.clear();
    };
    this.download = function(type, info){
        window.open(canvas.toDataURL('png'));
    };
    function sendData(type, info, operation) {
        ws.send(JSON.stringify({
            'section': 'drawings',
            'data': {
                'operation': operation,
                'type': type,
                'info': info,
            }}));
    }
}
