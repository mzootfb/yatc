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
    function enableDisable() {

    }
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
    $(".radio").change(calculator());


    //testing reading values

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

    //calculator

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

            $('#gradModal').foundation('open');

            document.getElementById("gradText").innerHTML = programCost,
                document.getElementById("gradTitle").innerHTML = title;
        } else if (degree == 1) {



            var flres;
            $.each($("input[name='fooby[1][]']:checked"), function() {
                flres = $(this).val();
            });

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


    //cheatcodes
    function cheatcodes() {

    }
});
