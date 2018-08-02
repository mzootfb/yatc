//slider js
$(function() {

    //creation
    var slider1 = document.getElementById('sldrFall');
    var slider2 = document.getElementById('sldrSpr');
    var slider3 = document.getElementById('sldrSum');

    noUiSlider.create(slider1, {
        start: [12],
        step: 1,
        range: {
            'min': 0,
            'max': 18
        }
    });
    noUiSlider.create(slider2, {
        start: [12],
        step: 1,
        range: {
            'min': 0,
            'max': 18
        }
    });
    noUiSlider.create(slider3, {
        start: [6],
        step: 1,
        range: {
            'min': 0,
            'max': 18
        }
    });

    // full/part/custom toggles

    //set sliders
    document.getElementById("fullbtn").addEventListener("click", function() {
        slider1.noUiSlider.set(12);
        slider2.noUiSlider.set(12);
        slider3.noUiSlider.set(6);
    });
    document.getElementById("partbtn").addEventListener("click", function() {
        slider1.noUiSlider.set(6);
        slider2.noUiSlider.set(6);
        slider3.noUiSlider.set(3);
    });

    //for changing value dynamically + changing buttons to be "active"
    var slider1val = document.getElementById('fallhrs');
    var slider2val = document.getElementById('sprhrs');
    var slider3val = document.getElementById('sumhrs');
    var sliderttl = document.getElementById('ttlhrs');

    slider1.noUiSlider.on('update', function(values, handle) {
        slider1val.innerHTML = numeral(values[handle]).format('0,0');
        sliderttl.innerHTML = (Number(slider1.noUiSlider.get()) + Number(slider2.noUiSlider.get()) + Number(slider3.noUiSlider.get()));
    });
    slider1.noUiSlider.on('change', function(values, handle) {
        $(".sldrbtn").removeClass("buttonCactive").addClass("buttonC");
        $('#custmbtn').removeClass("buttonC").addClass("buttonCactive");
    });
    slider2.noUiSlider.on('update', function(values, handle) {
        slider2val.innerHTML = numeral(values[handle]).format('0,0');
        sliderttl.innerHTML = (Number(slider1.noUiSlider.get()) + Number(slider2.noUiSlider.get()) + Number(slider3.noUiSlider.get()));


    });
    slider2.noUiSlider.on('change', function(values, handle) {
        $(".sldrbtn").removeClass("buttonCactive").addClass("buttonC");
        $('#custmbtn').removeClass("buttonC").addClass("buttonCactive");

    });
    slider3.noUiSlider.on('update', function(values, handle) {
        slider3val.innerHTML = numeral(values[handle]).format('0,0');
        sliderttl.innerHTML = (Number(slider1.noUiSlider.get()) + Number(slider2.noUiSlider.get()) + Number(slider3.noUiSlider.get()));

    });
    slider3.noUiSlider.on('change', function(values, handle) {
        $(".sldrbtn").removeClass("buttonCactive").addClass("buttonC");
        $('#custmbtn').removeClass("buttonC").addClass("buttonCactive");

    });

    //end slider js
});

//for the button toggle (more "active" settings)
$(function() {
    $("#testHighlight").click(calculator());


    $(".sldrbtn").click(function() {
        $(".sldrbtn").removeClass("buttonCactive").addClass("buttonC");
        $(this).removeClass("buttonC").addClass("buttonCactive");



    });
})

//small fix for the checkboxes
$("input:checkbox").click(function() {
    var group = "input:checkbox[name='" + $(this).attr("name") + "']";
    $(group).prop("checked", false);
    $(this).prop("checked", true);
});


//enable-disable
$("#degreeType").change(function() {
    var degreeType = Number(document.getElementById("degreeType").value);
    if (degreeType == 1) {
        $(".g").attr("disabled", true);
        $(".u").removeAttr("disabled");
        $('#programType').trigger('chosen:updated');
    } else if (degreeType == 2) {
        $(".u").attr("disabled", true);
        $(".g").removeAttr("disabled");
        $('#programType').trigger('chosen:updated');
    } else {

    }
});
/*
//trying to autorun the calculator when everything is filled out
$('.inpt').click(function() {
    var empty = $(this).parent().find(".inpt").filter(function() {
        return this.value === "";
    });
    if (empty.length) {
        //At least one input is empty

    } else {
        calculator();
    }
});
*/
//testing reading values
/*
$(function() {


    $("#testHighlight").click(function() {
        var acadYear = Number(document.getElementById("acadYear").value);
        var degreeType = Number(document.getElementById("degreeType").value);
        var programType = Number(document.getElementById("programType").value);
        var flres;
        $.each($("input[name='fooby[1][]']:checked"), function() {
            flres = $(this).val();
        });
        document.getElementById("testText").innerHTML = acadYear + ", " + degreeType + ", " + programType + ", " + flres;
    });
})

*/

//fix mobile??



var chosenSelects = $('.ui-select').find('.chosen-select, [chosen]'),
    $select, $option;

if (chosenSelects) {
    chosenSelects.chosen();

    // Check for 'chosen' elements on mobile devices
    // -----
    // Given that ChosenJS has expressly been disabled from running
    // on mobile browsers, the styles have to be applied manually.
    // Source: https://github.com/harvesthq/chosen/pull/1388
    // -----
    // The code below gathers all 'chosen' selectors and adds
    // 'chosen-mobile' as a className. This className is then
    // used to apply the necessary styles for mobile browsers.
    // Within each select, if an 'option' has an empty value,
    // then that value will be given 'selected' and 'disabled'
    // attributes to act as a placeholder, adopting the text
    // in the 'data-placeholder' as the text to be displayed.
    if (/iP(od|hone)/i.test(window.navigator.userAgent) || (/Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent))) {
        chosenSelects.each(function() {
            $select = $(this);
            $select.addClass('chosen-mobile');

            $select.find('option').each(function() {
                $option = $(this);

                if ($option.val() == '') {
                    $option
                        .attr('selected', 'selected')
                        .attr('disabled', 'disabled')
                        .text($select.data('placeholder'));
                }
            });
        });
    }
}

//dabugger
var obj = document.createElement("audio");
obj.src = "https://www.soundjay.com/misc/sounds/twist-squeeze-2.mp3";
obj.volume = 0.10;
obj.autoPlay = false;
obj.preLoad = true;
var keyCodes = [],
    konamiString = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function(e) {
    keyCodes.push(e.keyCode);
    if (keyCodes.toString().indexOf(konamiString) >= 0) {
        $(document).unbind('keydown', arguments.callee);

        // do something cool here
        obj.play();
        $('#warningModal').foundation('open');
        document.getElementById("konam").innerHTML = '<link rel="stylesheet" href="KimonoedaC.css">';
    }
});


//calculator
$(".radio").click(function() {
    calculator();
});
$("#programType").click(function() {
    var degree = Number(document.getElementById("degreeType").value);
    if (degree == 2) {
        calculator();
    }
});

function calculator() {
    var credits1;
    var credits2;
    var credits3;
    var credits;
    var diff = Number(52.29);
    var fee = Number(30);
    var multiplier = Number(1);
    var multi = Number(credits * multiplier);
    var differ = Number(credits * diff);
    var dfee = Number(fee * credits);
    var ttlcost = Number(((credits * multiplier) + (credits * multiplier) + (credits * fee)) + 10 + 93.69);
    var slider1 = document.getElementById('sldrFall');
    var slider2 = document.getElementById('sldrSpr');
    var slider3 = document.getElementById('sldrSum');
    var total1;
    var total2;
    var total3;
    var degree = Number(document.getElementById("degreeType").value);
    var flres;
    $.each($("input[name='fooby[1][]']:checked"), function() {
        flres = $(this).val();
    });



    if (degree == 2) {
        var graddeg = Number(document.getElementById("programType").value);
        var programCost = "";
        switch (graddeg) {
            case 50:
                programCost = "$18,300 for 36 Credit Hours"
                break;
            case 51:
                programCost = "$25,000 for 30 Credit Hours"
                break;
            case 52:
                programCost = "$25,000 for 30 Credit Hours"
                break;
            case 53:
                programCost = "$31,200 (Hybrid)/ $36,000 (Fully Online) for 48 Credit Hours"
                break;
            case 54:
                programCost = "$59,892 for 42 Credit Hours"
                break;
            case 55:
                programCost = "$35,000 for 38 Credit Hours"
                break;
            case 56:
                programCost = "$33,000 for 36 Credit Hours"
                break;
            case 57:
                programCost = "$25,000 for 30 Credit Hours"
                break;
            case 58:
                programCost = "$28,000 (In-state)/ $30,000 (Out-of-state) for 30 Credit Hours"
                break;
            case 59:
                programCost = "$18,300 for 36 Credit Hours"
                break;
            default:
                programCost = "$18,300 for 36 Credit Hours"
        }


        var title = document.getElementById('programType').options[document.getElementById('programType').selectedIndex].text;



        document.getElementById("gradText").innerHTML = programCost,
            document.getElementById("gradTitle").innerHTML = title;
        $('#gradModal').foundation('open');
    } else if (degree == 1) {

        if (flres == 1) {
            multiplier = 130.42;
        } else if (flres == 2 || flres == 3) {
            multiplier = 247.48;
        }


        slider1.noUiSlider.on('update', function(values, handle) {
            credits1 = (Number(slider1.noUiSlider.get()));
            credits2 = (Number(slider2.noUiSlider.get()));
            credits3 = (Number(slider3.noUiSlider.get()));

            document.getElementById('multitude1').innerHTML = numeral(Number(credits1 * multiplier)).format('$0,0.00');
            document.getElementById('diff1').innerHTML = numeral(Number(credits1 * diff)).format('$0,0.00');
            document.getElementById('fee1').innerHTML = numeral(Number(credits1 * fee)).format('$0,0.00');
            total1 = Number(((credits1 * (multiplier + diff + fee)) + 10 + 93.69));
            document.getElementById('total1').innerHTML = numeral(total1).format('$0,0.00');
            document.getElementById('costSemester').innerHTML = numeral(total1 + total2 + total3).format('0,0.00');


        });
        slider2.noUiSlider.on('update', function(values, handle) {
            credits1 = (Number(slider1.noUiSlider.get()));
            credits2 = (Number(slider2.noUiSlider.get()));
            credits3 = (Number(slider3.noUiSlider.get()));


            document.getElementById('multitude2').innerHTML = numeral(Number(credits2 * multiplier)).format('$0,0.00');
            document.getElementById('diff2').innerHTML = numeral(Number(credits2 * diff)).format('$0,0.00');
            document.getElementById('fee2').innerHTML = numeral(Number(credits2 * fee)).format('$0,0.00');
            total2 = Number(((credits2 * (multiplier + diff + fee)) + 10 + 93.69));
            document.getElementById('total2').innerHTML = numeral(total2).format('$0,0.00');
            document.getElementById('costSemester').innerHTML = numeral(total1 + total2 + total3).format('0,0.00');



        });
        slider3.noUiSlider.on('update', function(values, handle) {
            credits1 = (Number(slider1.noUiSlider.get()));
            credits2 = (Number(slider2.noUiSlider.get()));
            credits3 = (Number(slider3.noUiSlider.get()));

            document.getElementById('multitude3').innerHTML = numeral(Number(credits3 * multiplier)).format('$0,0.00');
            document.getElementById('diff3').innerHTML = numeral(Number(credits3 * diff)).format('$0,0.00');
            document.getElementById('fee3').innerHTML = numeral(Number(credits3 * fee)).format('$0,0.00');
            total3 = Number(((credits3 * (multiplier + diff + fee)) + 10 + 93.69));
            document.getElementById('total3').innerHTML = numeral(total3).format('$0,0.00');
            document.getElementById('costSemester').innerHTML = numeral(total1 + total2 + total3).format('0,0.00');



        });
    }
}
