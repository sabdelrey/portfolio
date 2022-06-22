// Rgraph
const dessigneMonGraph = () => {
    data = [80,25,182.5,550,2019.8];

    new RGraph.SVG.Line({
        id: 'chart',
        data: data,
        options: {
            backgroundGridBorder: false,
            backgroundGridColor: '#fff',
            backgroundGridLinewidth: 0.5,
            backgroundGridVlines: false,
            colors: ['#ffb8de'],
            textFont: '"Comfortaa", cursive',
            xaxisColor: '#fff',
            xaxisTickmarks: false,
            xaxisLabels: ['2014', '2015', '2016', '2017', '2018'],
            xaxisLinewidth:2,
            yaxisColor: '#fff',
            yaxisTickmarks: false,
            yaxisScaleUnitsPost: 'k',
            yaxisScaleThousand: '',
            yaxisTitle: 'Nombre de spectateurs',
            spectacles: ['The Red Bullet Tour','Wake Up : Open Your Eyes Japan Tour','The Most Beautiful Moment in Life On Stage Tour','The Wings Tour','Love Yourself World Tour'],
            tooltips: '%{property:spectacles[%{index}]} <br>(%{property:xaxisLabels[%{index}]}) : %{value_formatted} spectateurs',
            tooltipsFormattedThousand: ' ',
            tooltipsFormattedUnitsPost: 'k',
            spline: true,
            filled: true,
            filledColors: ['Gradient(#a6c1ee:#ffd1ff:#f9ceb5)'],
            linewidth: 1,
            tickmarksSize: 4,
            tickmarksStyle: 'filledcircle',
            tooltipsCss: {
                backgroundColor: '#fff',
                color: '#000',
                fontFamily: '"Rajdhani", sans-serif',
                fontWeight: '500',
                fontSize: '16px',
                boxShadow: '1px 1px 2px #ffb8de'
            }            
        }
    }).draw().responsive([
        {
            maxWidth: null, 
            width: 800,
            height: 500,
            options: {
                xaxisLabelsOffsety: 5,
                xaxisLabelsSize: 18,
                yaxisLabelsOffsetx: -5,
                yaxisLabelsSize: 18,
                yaxisTitleOffsetx: -45,
                yaxisTitleSize: 18,
                marginBottom: 60,
                marginLeft: 150,
                tooltipsEvent: 'mousemove',
                tooltipsCss: {
                    backgroundColor: '#fff',
                    color: '#000',
                    fontFamily: '"Rajdhani", sans-serif',
                    fontWeight: '500',
                    fontSize: '18px',
                    boxShadow: '1px 1px 2px #ffb8de'
                }
            }
        },
        {
            maxWidth: 1400, 
            width: 600,
            height: 450,
            options: {
                xaxisLabelsOffsety: 5,
                xaxisLabelsSize: 18,
                yaxisLabelsOffsetx: -5,
                yaxisLabelsSize: 18,
                yaxisTitleOffsetx: -45,
                yaxisTitleSize: 18,
                marginBottom: 60,
                marginLeft: 150,
                tooltipsEvent: 'mousemove'
            }
        },
        {
            maxWidth: 1024,
            width: 550,
            height: 350,
            options: {
                xaxisLabelsAngle: 30,
                xaxisLabelsSize: 14,
                xaxisLabelsOffsety: 10,
                yaxisLabelsSize: 14,
                yaxisLabelsOffsetx: -5,
                yaxisTitleSize: 14,
                yaxisTitleOffsetx: -25,
                marginBottom: 60,
                marginLeft: 120,
                marginRight: 20,
                tooltipsEvent: 'click'
            }
        },
        {
            maxWidth: 600,
            width: 480,
            height: 300,
            options: {
                xaxisLabelsAngle: 30,
                xaxisLabelsSize: 12,
                xaxisLabelsOffsety: 5,
                yaxisLabelsSize: 12,
                yaxisTitleSize: 12,
                yaxisTitleOffsetx: -15,
                marginBottom: 60,
                marginLeft: 100,
                marginRight: 20,
                tooltipsEvent: 'click'
            }
        }
    ]);
};

dessigneMonGraph();

// Dessin canvas
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');
const gradient = ctx.createLinearGradient(183, 10, 183, 585);

gradient.addColorStop(0, '#a6c1ee');
gradient.addColorStop(.5, '#ffd1ff');
gradient.addColorStop(1, '#f9ceb5');

ctx.strokeStyle = '#dfe7fd';
ctx.fillStyle = gradient;

ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(165, 145);
    ctx.lineTo(165, 530);
    ctx.lineTo(10, 585);
    ctx.lineTo(10, 10);

    ctx.moveTo(200, 145);
    ctx.lineTo(355, 10);
    ctx.lineTo(355, 585);
    ctx.lineTo(200, 530);
ctx.closePath();

ctx.stroke();
ctx.fill();

// Appear

$(function() {
    
    let animer = $('.animate__animated');

    animer.appear();

    animer.on('appear', function() {
        let element = $(this);
        let animation = element.data('animation');
        let delay = element.data('delay');

        if (delay) {
        window.setTimeout(function() {
            element.removeClass('invisible').addClass(`animate__${animation} visible`);
        }, delay);
        } else {
        element.removeClass('invisible').addClass(`animate__${animation} visible`);
        }
    });    
});