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

            //calculator
            function calculator() {
                var costPerCredit = Number(130.42);
                var diffFee = Number(52.29);
                var distFee = Number(30.00);
                var onecard = Number(10.00);
                var healthFee = Number(93.69);
                var creditsFall;
                var creditsSpr;
                var creditsSum;
                var creditsTtl;
                var degree = Number(document.getElementById("degreeType").value);

                if (degreeType == 2) {
                    //for grad
                    var graddeg = Number(document.getElementById("programSelect").value);
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


                    var title = document.getElementById('programSelect').options[document.getElementById('programSelect').selectedIndex].text;


                    document.getElementById("gradText").innerHTML = programCost,
                        document.getElementById("gradTitle").innerHTML = title;
                } else if (degreeType == 1) {
                    //for undrgrad

                    var radios = document.getElementsByClassName('radio');


                    for (var i = 0, length = radios.length; i < length; i++) {
                        if (radios[i].checked) {
                            // do whatever you want with the checked radio
                            var flres = radios[i].value;

                            // only one radio can be logically checked, don't check the rest
                            break;
                        }
                    }

                    if (flres == 1) {
                    	 alert("Hello! I am an alert box!!");
                        multiplier = 130.42;
                    } else if (flres == 2) {
                    	 alert("Hello! I am an alert box!!");
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
                        document.getElementById('costSemester').innerHTML = numeral(total1 + total2 + total3).format('$0,0.00');


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
                        document.getElementById('costSemester').innerHTML = numeral(total1 + total2 + total3).format('$0,0.00');



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
                        document.getElementById('costSemester').innerHTML = numeral(total1 + total2 + total3).format('$0,0.00');



                    });

                } else {
                    //option wrong
                }

            }


            //cheatcodes
            function cheatcodes() {

            }
        });
