document.addEventListener("DOMContentLoaded", function () {

    // Event listener for calculate button
    const calculateBtn = document.getElementById("calculate");
    calculateBtn.addEventListener("click", calculate);

    function formatTime(seconds) {
        let min = Math.floor(seconds / 60);
        let sec = Math.floor(seconds % 60).toString().padStart(2, "0");
        let msec = Math.round(((seconds % 1) * 1000) / 10);
        return `${min}:${sec}.${msec}`;
    }

    function calculate() {
        // Get inputs
        let string_min = document.getElementById("min").value || "0";
        let min_val = parseFloat(string_min) * 60;

        let string_sec = document.getElementById("sec").value || "0";
        let sec_val = parseFloat(string_sec);

        let tot = sec_val + min_val;
        console.log("Total seconds:", tot);

        let event = document.getElementById("eventSelector").value;
        console.log("Selected event:", event);

        if (event === "1500m") {
            console.log("1500")

            //1500 -> 3000
            let three = tot * 2.23
            document.getElementById("3k").textContent = formatTime(three)

            //1500
            document.getElementById("1500").textContent = formatTime(tot)

            //3000 - > 5000
            let five = three * 1.781
            document.getElementById("5k").textContent = formatTime(five)

            //1500 -> 400
            let four = tot * 0.205
            document.getElementById("400").textContent = formatTime(four)

            //400 -> 800
            let e = (four * 1.66) * 1.38
            document.getElementById("800").textContent = formatTime(e)

            //400 -> 200
            let two = four / 2.2
            document.getElementById("200").textContent = formatTime(two)

            //400 -> 100
            let one = (four / 2.2) / 2.01
            document.getElementById("100").textContent = formatTime(one)

            //SE1
            let SE1_4 = four * 1.0526
            document.getElementById("SE1_400").textContent = formatTime(SE1_4)
            let SE1 = (four * 1.0526) * 4.0225;
            document.getElementById("SE1").textContent = formatTime(SE1)
            let SE1_8 = SE1_4 * 2;
            document.getElementById("SE1_800").textContent = formatTime(SE1_8)
            let SE1_2 = SE1_4 / 2;
            document.getElementById("SE1_200").textContent = formatTime(SE1_2)


            //SE2
            let SE2_top = ((four * 1.2048)/400) * 1609;
            let SE2_bot = ((four * 1.1494)/400) * 1609;
            document.getElementById("SE2").textContent = formatTime(SE2_bot) + "~" + formatTime(SE2_top)
            let SE2_top4 = (four*1.2048);
            let SE2_bot4 = (four*1.1494);
            document.getElementById("SE2_400").textContent = formatTime(SE2_bot4) + "~" + formatTime(SE2_top4)
            let SE2_top2 = SE2_top4 / 2;
            let SE2_bot2 = SE2_bot4  / 2;
            document.getElementById("SE2_200").textContent = formatTime(SE2_bot2) + "~" + formatTime(SE2_top2)
            let SE2_top8 = SE2_top4 * 2;
            let SE2_bot8 = SE2_bot4  * 2;
            document.getElementById("SE2_800").textContent = formatTime(SE2_bot8) + "~" + formatTime(SE2_top8)

            //LT1
            let LT1_top = (three * 1.25) * (1609 / 3000);
            let LT1_bot = (three * 1.1765) * (1609 / 3000);
            document.getElementById("LT1").textContent = formatTime(LT1_bot) + "~" + formatTime(LT1_top)
            let LT1_top8 = LT1_top / 2;
            let LT1_bot8 = LT1_bot / 2;
            document.getElementById("LT1_800").textContent = formatTime(LT1_bot8) + "~" + formatTime(LT1_top8)
            let LT1_top4 = LT1_top / 4;
            let LT1_bot4 = LT1_bot / 4;
            document.getElementById("LT1_400").textContent = formatTime(LT1_bot4) + "~" + formatTime(LT1_top4)
            let LT1_top2 = LT1_top / 8;
            let LT1_bot2 = LT1_bot / 8;
            document.getElementById("LT1_200").textContent = formatTime(LT1_bot2) + "~" + formatTime(LT1_top2)

            //LT2/CV
            let LT2_top = ((three * 1.1111) / 3000) * 1609;
            let LT2_bot = ((three * 1.0526)/ 3000) * 1609;
            document.getElementById("LT2").textContent = formatTime(LT2_bot) + "~" + formatTime(LT2_top)
            let LT2_top8 = ((three * 1.1111) / 3000) * 800;
            let LT2_bot8 = ((three * 1.0526) / 3000) * 800;
            document.getElementById("LT2_800").textContent = formatTime(LT2_bot8) + "~" + formatTime(LT2_top8)
            let LT2_top4 = LT2_top8 / 2;
            let LT2_bot4 = LT2_bot8 / 2;
            document.getElementById("LT2_400").textContent = formatTime(LT2_bot4) + "~" + formatTime(LT2_top4)
            let LT2_top2 = LT2_top8 / 4;
            let LT2_bot2 = LT2_bot8 / 4;
            document.getElementById("LT2_200").textContent = formatTime(LT2_bot2) + "~" + formatTime(LT2_top2)

            //Vo2 max
            let Vo2_top = (three / 3000) * 1609;
            document.getElementById("Vo2").textContent = formatTime(Vo2_top)
            let Vo2_top8 = (three / 3000) * 800;
            document.getElementById("Vo2_800").textContent = formatTime(Vo2_top8)
            let Vo2_top4 = Vo2_top8 / 2;
            document.getElementById("Vo2_400").textContent = formatTime(Vo2_top4)
            let Vo2_top2 = Vo2_top8 / 4;
            document.getElementById("Vo2_200").textContent = formatTime(Vo2_top2)

            //tempo
            let t_topm = five / 5000
            let t_botm = five / 5000
            let t_top = (t_topm * 1609) + 55;
            let t_bot = (t_botm * 1609) + 45;
            document.getElementById("t").textContent = formatTime(t_bot) + "~" + formatTime(t_top)
            let t_top8 = ((t_top / 1609) * 800);
            let t_bot8 = ((t_bot / 1609) * 800);
            document.getElementById("t_800").textContent = formatTime(t_bot8) + "~" + formatTime(t_top8)
            let t_top4 = t_top8 / 2;
            let t_bot4 = t_bot8 / 2;
            document.getElementById("t_400").textContent = formatTime(t_bot4) + "~" + formatTime(t_top4)
            let t_top2 = t_top8 / 4;
            let t_bot2 = t_bot8 / 4;
            document.getElementById("t_200").textContent = formatTime(t_bot2) + "~" + formatTime(t_top2)

            //soft tempo
            let st_top = t_top + 30;
            let st_bot = t_bot + 20;
            document.getElementById("st").textContent = formatTime(st_bot) + "~" + formatTime(st_top)
            let st_top8 = ((st_top / 1609) * 800);
            let st_bot8 = ((st_bot / 1609) * 800);
            document.getElementById("st_800").textContent = formatTime(st_bot8) + "~" + formatTime(st_top8)
            let st_top4 = st_top8 / 2;
            let st_bot4 = st_bot8 / 2;
            document.getElementById("st_400").textContent = formatTime(st_bot4) + "~" + formatTime(st_top4)
            let st_top2 = st_top8 / 4;
            let st_bot2 = st_bot8 / 4;
            document.getElementById("st_200").textContent = formatTime(st_bot2) + "~" + formatTime(st_top2)

            //extensive tempo
            let et_top = ((two * 1.3333) / 200) * 1609;
            document.getElementById("et").textContent = formatTime(et_top)
            let et_top8 = (two * 1.3333) * 4;
            document.getElementById("et_800").textContent = formatTime(et_top8)
            let et_top4 = (two * 1.3333) * 2;
            document.getElementById("et_400").textContent = formatTime(et_top4)
            let et_top2 = (two * 1.3333);
            document.getElementById("et_200").textContent = formatTime(et_top2)

            //intensive tempo
            let it_top = ((one * 1.25) / 100) * 1609;
            let it_bot = ((one * 1.1111) / 100) * 1609;
            document.getElementById("it").textContent = formatTime(it_bot) + "~" + formatTime(it_top)
            let it_top2 = (one * 1.25) * 2;
            let it_bot2 = (one * 1.1111) * 2;
            document.getElementById("it_200").textContent = formatTime(it_bot2) + "~" + formatTime(it_top2)
            let it_top8 = it_top2 * 4;
            let it_bot8 = it_bot2 * 4;
            document.getElementById("it_800").textContent = formatTime(it_bot8) + "~" + formatTime(it_top8)
            let it_top4 = it_top2 * 2;
            let it_bot4 = it_bot2 * 2;
            document.getElementById("it_400").textContent = formatTime(it_bot4) + "~" + formatTime(it_top4)
        }
        //////////////////////////// 800 /////////////////////////////
        else if (event === "800m") {

            console.log("800")
            //800
            document.getElementById("800").textContent = formatTime(tot)

            //800 -> 400
            let four = (tot / 1.38) / 1.66
            document.getElementById("400").textContent = formatTime(four)

            //400 -> 1500
            let fifteen = four / 0.205
            document.getElementById("1500").textContent = formatTime(fifteen)

            //400 -> 200
            let two = four / 2.2
            document.getElementById("200").textContent = formatTime(two)

            //400 -> 100
            let one = (four / 2.2) / 2.01
            document.getElementById("100").textContent = formatTime(one)

            //1500 -> 3k
            let three = fifteen * 2.23
            document.getElementById("3k").textContent = formatTime(three)

            //3k -> 5k
            let five = three * 1.781
            document.getElementById("5k").textContent = formatTime(five)


            //SE1
            let SE1_4 = four * 1.0526
            document.getElementById("SE1_400").textContent = formatTime(SE1_4)
            let SE1 = (four * 1.0526) * 4.0225;
            document.getElementById("SE1").textContent = formatTime(SE1)
            let SE1_8 = SE1_4 * 2;
            document.getElementById("SE1_800").textContent = formatTime(SE1_8)
            let SE1_2 = SE1_4 / 2;
            document.getElementById("SE1_200").textContent = formatTime(SE1_2)


            //SE2
            let SE2_top = ((four * 1.2048)/400) * 1609;
            let SE2_bot = ((four * 1.1494)/400) * 1609;
            document.getElementById("SE2").textContent = formatTime(SE2_bot) + "~" + formatTime(SE2_top)
            let SE2_top4 = (four*1.2048);
            let SE2_bot4 = (four*1.1494);
            document.getElementById("SE2_400").textContent = formatTime(SE2_bot4) + "~" + formatTime(SE2_top4)
            let SE2_top2 = SE2_top4 / 2;
            let SE2_bot2 = SE2_bot4  / 2;
            document.getElementById("SE2_200").textContent = formatTime(SE2_bot2) + "~" + formatTime(SE2_top2)
            let SE2_top8 = SE2_top4 * 2;
            let SE2_bot8 = SE2_bot4 * 2;
            document.getElementById("SE2_800").textContent = formatTime(SE2_bot8) + "~" + formatTime(SE2_top8)

            //LT1
            let LT1_top = (three * 1.25) * (1609 / 3000);
            let LT1_bot = (three * 1.1765) * (1609 / 3000);
            document.getElementById("LT1").textContent = formatTime(LT1_bot) + "~" + formatTime(LT1_top)
            let LT1_top8 = LT1_top / 2;
            let LT1_bot8 = LT1_bot / 2;
            document.getElementById("LT1_800").textContent = formatTime(LT1_bot8) + "~" + formatTime(LT1_top8)
            let LT1_top4 = LT1_top / 4;
            let LT1_bot4 = LT1_bot / 4;
            document.getElementById("LT1_400").textContent = formatTime(LT1_bot4) + "~" + formatTime(LT1_top4)
            let LT1_top2 = LT1_top / 8;
            let LT1_bot2 = LT1_bot / 8;
            document.getElementById("LT1_200").textContent = formatTime(LT1_bot2) + "~" + formatTime(LT1_top2)

            //LT2/CV
            let LT2_top = ((three * 1.1111) / 3000) * 1609;
            let LT2_bot = ((three * 1.0526)/ 3000) * 1609;
            document.getElementById("LT2").textContent = formatTime(LT2_bot) + "~" + formatTime(LT2_top)
            let LT2_top8 = ((three * 1.1111) / 3000) * 800;
            let LT2_bot8 = ((three * 1.0526) / 3000) * 800;
            document.getElementById("LT2_800").textContent = formatTime(LT2_bot8) + "~" + formatTime(LT2_top8)
            let LT2_top4 = LT2_top8 / 2;
            let LT2_bot4 = LT2_bot8 / 2;
            document.getElementById("LT2_400").textContent = formatTime(LT2_bot4) + "~" + formatTime(LT2_top4)
            let LT2_top2 = LT2_top8 / 4;
            let LT2_bot2 = LT2_bot8 / 4;
            document.getElementById("LT2_200").textContent = formatTime(LT2_bot2) + "~" + formatTime(LT2_top2)

            //Vo2 max
            let Vo2_top = (three / 3000) * 1609;
            document.getElementById("Vo2").textContent = formatTime(Vo2_top)
            let Vo2_top8 = (three / 3000) * 800;
            document.getElementById("Vo2_800").textContent = formatTime(Vo2_top8)
            let Vo2_top4 = Vo2_top8 / 2;
            document.getElementById("Vo2_400").textContent = formatTime(Vo2_top4)
            let Vo2_top2 = Vo2_top8 / 4;
            document.getElementById("Vo2_200").textContent = formatTime(Vo2_top2)

            //tempo
            let t_topm = five / 5000
            let t_botm = five / 5000
            let t_top = (t_topm * 1609) + 55;
            let t_bot = (t_botm * 1609) + 45;
            document.getElementById("t").textContent = formatTime(t_bot) + "~" + formatTime(t_top)
            let t_top8 = ((t_top / 1609) * 800);
            let t_bot8 = ((t_bot / 1609) * 800);
            document.getElementById("t_800").textContent = formatTime(t_bot8) + "~" + formatTime(t_top8)
            let t_top4 = t_top8 / 2;
            let t_bot4 = t_bot8 / 2;
            document.getElementById("t_400").textContent = formatTime(t_bot4) + "~" + formatTime(t_top4)
            let t_top2 = t_top8 / 4;
            let t_bot2 = t_bot8 / 4;
            document.getElementById("t_200").textContent = formatTime(t_bot2) + "~" + formatTime(t_top2)

            //soft tempo
            let st_top = t_top + 30;
            let st_bot = t_bot + 20;
            document.getElementById("st").textContent = formatTime(st_bot) + "~" + formatTime(st_top)
            let st_top8 = ((st_top / 1609) * 800);
            let st_bot8 = ((st_bot / 1609) * 800);
            document.getElementById("st_800").textContent = formatTime(st_bot8) + "~" + formatTime(st_top8)
            let st_top4 = st_top8 / 2;
            let st_bot4 = st_bot8 / 2;
            document.getElementById("st_400").textContent = formatTime(st_bot4) + "~" + formatTime(st_top4)
            let st_top2 = st_top8 / 4;
            let st_bot2 = st_bot8 / 4;
            document.getElementById("st_200").textContent = formatTime(st_bot2) + "~" + formatTime(st_top2)

            //extensive tempo
            let et_top = ((two * 1.3333) / 200) * 1609;
            document.getElementById("et").textContent = formatTime(et_top)
            let et_top8 = (two * 1.3333) * 4;
            document.getElementById("et_800").textContent = formatTime(et_top8)
            let et_top4 = (two * 1.3333) * 2;
            document.getElementById("et_400").textContent = formatTime(et_top4)
            let et_top2 = (two * 1.3333);
            document.getElementById("et_200").textContent = formatTime(et_top2)

            //intensive tempo
            let it_top = ((one * 1.25) / 100) * 1609;
            let it_bot = ((one * 1.1111) / 100) * 1609;
            document.getElementById("it").textContent = formatTime(it_bot) + "~" + formatTime(it_top)
            let it_top2 = (one * 1.25) * 2;
            let it_bot2 = (one * 1.1111) * 2;
            document.getElementById("it_200").textContent = formatTime(it_bot2) + "~" + formatTime(it_top2)
            let it_top8 = it_top2 * 4;
            let it_bot8 = it_bot2 * 4;
            document.getElementById("it_800").textContent = formatTime(it_bot8) + "~" + formatTime(it_top8)
            let it_top4 = it_top2 * 2;
            let it_bot4 = it_bot2 * 2;
            document.getElementById("it_400").textContent = formatTime(it_bot4) + "~" + formatTime(it_top4)
        }
        ////////////////////////////////////// 400 //////////////////////////////////////////
        else if (event === "400m") {

            //400
            let four = tot
            document.getElementById("400").textContent = formatTime(tot)

            //400 -> 200
            let two = tot / 2.2
            document.getElementById("200").textContent = formatTime(two)

            //400 -> 100
            let one = two / 2.01
            document.getElementById("100").textContent = formatTime(one)

            //400 -> 800
            let e = (tot * 1.66) * 1.38
            document.getElementById("800").textContent = formatTime(e)

            //400 -> 1500
            let fifteen = tot / 0.205
            document.getElementById("1500").textContent = formatTime(fifteen)

            //1500 -> 3k
            let three = fifteen * 2.23
            document.getElementById("3k").textContent = formatTime(three)

            //3k -> 5k
            let five = three * 1.781
            document.getElementById("5k").textContent = formatTime(five)

            //SE1
            let SE1_4 = four * 1.0526
            document.getElementById("SE1_400").textContent = formatTime(SE1_4)
            let SE1 = (four * 1.0526) * 4.0225;
            document.getElementById("SE1").textContent = formatTime(SE1)
            let SE1_8 = SE1_4 * 2;
            document.getElementById("SE1_800").textContent = formatTime(SE1_8)
            let SE1_2 = SE1_4 / 2;
            document.getElementById("SE1_200").textContent = formatTime(SE1_2)


            //SE2
            let SE2_top = ((four * 1.2048)/400) * 1609;
            let SE2_bot = ((four * 1.1494)/400) * 1609;
            document.getElementById("SE2").textContent = formatTime(SE2_bot) + "~" + formatTime(SE2_top)
            let SE2_top4 = (four*1.2048);
            let SE2_bot4 = (four*1.1494);
            document.getElementById("SE2_400").textContent = formatTime(SE2_bot4) + "~" + formatTime(SE2_top4)
            let SE2_top2 = SE2_top4 / 2;
            let SE2_bot2 = SE2_bot4  / 2;
            document.getElementById("SE2_200").textContent = formatTime(SE2_bot2) + "~" + formatTime(SE2_top2)
            let SE2_top8 = SE2_top4 * 2;
            let SE2_bot8 = SE2_bot4  * 2;
            document.getElementById("SE2_800").textContent = formatTime(SE2_bot8) + "~" + formatTime(SE2_top8)

            //LT1
            let LT1_top = (three * 1.25) * (1609 / 3000);
            let LT1_bot = (three * 1.1765) * (1609 / 3000);
            document.getElementById("LT1").textContent = formatTime(LT1_bot) + "~" + formatTime(LT1_top)
            let LT1_top8 = LT1_top / 2;
            let LT1_bot8 = LT1_bot / 2;
            document.getElementById("LT1_800").textContent = formatTime(LT1_bot8) + "~" + formatTime(LT1_top8)
            let LT1_top4 = LT1_top / 4;
            let LT1_bot4 = LT1_bot / 4;
            document.getElementById("LT1_400").textContent = formatTime(LT1_bot4) + "~" + formatTime(LT1_top4)
            let LT1_top2 = LT1_top / 8;
            let LT1_bot2 = LT1_bot / 8;
            document.getElementById("LT1_200").textContent = formatTime(LT1_bot2) + "~" + formatTime(LT1_top2)

            //LT2/CV
            let LT2_top = ((three * 1.1111) / 3000) * 1609;
            let LT2_bot = ((three * 1.0526)/ 3000) * 1609;
            document.getElementById("LT2").textContent = formatTime(LT2_bot) + "~" + formatTime(LT2_top)
            let LT2_top8 = ((three * 1.1111) / 3000) * 800;
            let LT2_bot8 = ((three * 1.0526) / 3000) * 800;
            document.getElementById("LT2_800").textContent = formatTime(LT2_bot8) + "~" + formatTime(LT2_top8)
            let LT2_top4 = LT2_top8 / 2;
            let LT2_bot4 = LT2_bot8 / 2;
            document.getElementById("LT2_400").textContent = formatTime(LT2_bot4) + "~" + formatTime(LT2_top4)
            let LT2_top2 = LT2_top8 / 4;
            let LT2_bot2 = LT2_bot8 / 4;
            document.getElementById("LT2_200").textContent = formatTime(LT2_bot2) + "~" + formatTime(LT2_top2)

            //Vo2 max
            let Vo2_top = (three / 3000) * 1609;
            document.getElementById("Vo2").textContent = formatTime(Vo2_top)
            let Vo2_top8 = (three / 3000) * 800;
            document.getElementById("Vo2_800").textContent = formatTime(Vo2_top8)
            let Vo2_top4 = Vo2_top8 / 2;
            document.getElementById("Vo2_400").textContent = formatTime(Vo2_top4)
            let Vo2_top2 = Vo2_top8 / 4;
            document.getElementById("Vo2_200").textContent = formatTime(Vo2_top2)

            //tempo
            let t_topm = five / 5000
            let t_botm = five / 5000
            let t_top = (t_topm * 1609) + 55;
            let t_bot = (t_botm * 1609) + 45;
            document.getElementById("t").textContent = formatTime(t_bot) + "~" + formatTime(t_top)
            let t_top8 = ((t_top / 1609) * 800);
            let t_bot8 = ((t_bot / 1609) * 800);
            document.getElementById("t_800").textContent = formatTime(t_bot8) + "~" + formatTime(t_top8)
            let t_top4 = t_top8 / 2;
            let t_bot4 = t_bot8 / 2;
            document.getElementById("t_400").textContent = formatTime(t_bot4) + "~" + formatTime(t_top4)
            let t_top2 = t_top8 / 4;
            let t_bot2 = t_bot8 / 4;
            document.getElementById("t_200").textContent = formatTime(t_bot2) + "~" + formatTime(t_top2)

            //soft tempo
            let st_top = t_top + 30;
            let st_bot = t_bot + 20;
            document.getElementById("st").textContent = formatTime(st_bot) + "~" + formatTime(st_top)
            let st_top8 = ((st_top / 1609) * 800);
            let st_bot8 = ((st_bot / 1609) * 800);
            document.getElementById("st_800").textContent = formatTime(st_bot8) + "~" + formatTime(st_top8)
            let st_top4 = st_top8 / 2;
            let st_bot4 = st_bot8 / 2;
            document.getElementById("st_400").textContent = formatTime(st_bot4) + "~" + formatTime(st_top4)
            let st_top2 = st_top8 / 4;
            let st_bot2 = st_bot8 / 4;
            document.getElementById("st_200").textContent = formatTime(st_bot2) + "~" + formatTime(st_top2)

            //extensive tempo
            let et_top = ((two * 1.3333) / 200) * 1609;
            document.getElementById("et").textContent = formatTime(et_top)
            let et_top8 = (two * 1.3333) * 4;
            document.getElementById("et_800").textContent = formatTime(et_top8)
            let et_top4 = (two * 1.3333) * 2;
            document.getElementById("et_400").textContent = formatTime(et_top4)
            let et_top2 = (two * 1.3333);
            document.getElementById("et_200").textContent = formatTime(et_top2)

            //intensive tempo
            let it_top = ((one * 1.25) / 100) * 1609;
            let it_bot = ((one * 1.1111) / 100) * 1609;
            document.getElementById("it").textContent = formatTime(it_bot) + "~" + formatTime(it_top)
            let it_top2 = (one * 1.25) * 2;
            let it_bot2 = (one * 1.1111) * 2;
            document.getElementById("it_200").textContent = formatTime(it_bot2) + "~" + formatTime(it_top2)
            let it_top8 = it_top2 * 4;
            let it_bot8 = it_bot2 * 4;
            document.getElementById("it_800").textContent = formatTime(it_bot8) + "~" + formatTime(it_top8)
            let it_top4 = it_top2 * 2;
            let it_bot4 = it_bot2 * 2;
            document.getElementById("it_400").textContent = formatTime(it_bot4) + "~" + formatTime(it_top4)
        }
        
        /////////////////////////// 3000 ///////////////////////////
        else if (event === "3000m"){

            //3000
            let three = tot
            document.getElementById("3k").textContent = formatTime(three)

            //3000 -> 5000
            let five = tot*1.781
            document.getElementById("5k").textContent = formatTime(five)

            //3000 -> 1500
            let fifteen = tot/2.23
            document.getElementById("1500").textContent = formatTime(fifteen)

            //1500 -> 400
            let four = fifteen*0.205
            document.getElementById("400").textContent = formatTime(four)

            //400 -> 200
            let two = four/2.2
            document.getElementById("200").textContent = formatTime(two)

            //400 -> 100
            let one = two/2.01
            document.getElementById("100").textContent = formatTime(one)

            //400 -> 800
            let e = (four*1.66)*1.38
            document.getElementById("800").textContent = formatTime(e)

            //SE1
            let SE1_4 = four * 1.0526
            document.getElementById("SE1_400").textContent = formatTime(SE1_4)
            let SE1 = (four * 1.0526) * 4.0225;
            document.getElementById("SE1").textContent = formatTime(SE1)
            let SE1_8 = SE1_4 * 2;
            document.getElementById("SE1_800").textContent = formatTime(SE1_8)
            let SE1_2 = SE1_4 / 2;
            document.getElementById("SE1_200").textContent = formatTime(SE1_2)


            //SE2
            let SE2_top = ((four * 1.2048)/400) * 1609;
            let SE2_bot = ((four * 1.1494)/400) * 1609;
            document.getElementById("SE2").textContent = formatTime(SE2_bot) + "~" + formatTime(SE2_top)
            let SE2_top4 = (four*1.2048);
            let SE2_bot4 = (four*1.1494);
            document.getElementById("SE2_400").textContent = formatTime(SE2_bot4) + "~" + formatTime(SE2_top4)
            let SE2_top2 = SE2_top4 / 2;
            let SE2_bot2 = SE2_bot4  / 2;
            document.getElementById("SE2_200").textContent = formatTime(SE2_bot2) + "~" + formatTime(SE2_top2)
            let SE2_top8 = SE2_top4 * 2;
            let SE2_bot8 = SE2_bot4  * 2;
            document.getElementById("SE2_800").textContent = formatTime(SE2_bot8) + "~" + formatTime(SE2_top8)

            //LT1
            let LT1_top = (three * 1.25) * (1609 / 3000);
            let LT1_bot = (three * 1.1765) * (1609 / 3000);
            document.getElementById("LT1").textContent = formatTime(LT1_bot) + "~" + formatTime(LT1_top)
            let LT1_top8 = LT1_top / 2;
            let LT1_bot8 = LT1_bot / 2;
            document.getElementById("LT1_800").textContent = formatTime(LT1_bot8) + "~" + formatTime(LT1_top8)
            let LT1_top4 = LT1_top / 4;
            let LT1_bot4 = LT1_bot / 4;
            document.getElementById("LT1_400").textContent = formatTime(LT1_bot4) + "~" + formatTime(LT1_top4)
            let LT1_top2 = LT1_top / 8;
            let LT1_bot2 = LT1_bot / 8;
            document.getElementById("LT1_200").textContent = formatTime(LT1_bot2) + "~" + formatTime(LT1_top2)

            //LT2/CV
            let LT2_top = ((three * 1.1111) / 3000) * 1609;
            let LT2_bot = ((three * 1.0526)/ 3000) * 1609;
            document.getElementById("LT2").textContent = formatTime(LT2_bot) + "~" + formatTime(LT2_top)
            let LT2_top8 = ((three * 1.1111) / 3000) * 800;
            let LT2_bot8 = ((three * 1.0526) / 3000) * 800;
            document.getElementById("LT2_800").textContent = formatTime(LT2_bot8) + "~" + formatTime(LT2_top8)
            let LT2_top4 = LT2_top8 / 2;
            let LT2_bot4 = LT2_bot8 / 2;
            document.getElementById("LT2_400").textContent = formatTime(LT2_bot4) + "~" + formatTime(LT2_top4)
            let LT2_top2 = LT2_top8 / 4;
            let LT2_bot2 = LT2_bot8 / 4;
            document.getElementById("LT2_200").textContent = formatTime(LT2_bot2) + "~" + formatTime(LT2_top2)

            //Vo2 max
            let Vo2_top = (three / 3000) * 1609;
            document.getElementById("Vo2").textContent = formatTime(Vo2_top)
            let Vo2_top8 = (three / 3000) * 800;
            document.getElementById("Vo2_800").textContent = formatTime(Vo2_top8)
            let Vo2_top4 = Vo2_top8 / 2;
            document.getElementById("Vo2_400").textContent = formatTime(Vo2_top4)
            let Vo2_top2 = Vo2_top8 / 4;
            document.getElementById("Vo2_200").textContent = formatTime(Vo2_top2)

            //tempo
            let t_topm = five / 5000
            let t_botm = five / 5000
            let t_top = (t_topm * 1609) + 55;
            let t_bot = (t_botm * 1609) + 45;
            document.getElementById("t").textContent = formatTime(t_bot) + "~" + formatTime(t_top)
            let t_top8 = ((t_top / 1609) * 800);
            let t_bot8 = ((t_bot / 1609) * 800);
            document.getElementById("t_800").textContent = formatTime(t_bot8) + "~" + formatTime(t_top8)
            let t_top4 = t_top8 / 2;
            let t_bot4 = t_bot8 / 2;
            document.getElementById("t_400").textContent = formatTime(t_bot4) + "~" + formatTime(t_top4)
            let t_top2 = t_top8 / 4;
            let t_bot2 = t_bot8 / 4;
            document.getElementById("t_200").textContent = formatTime(t_bot2) + "~" + formatTime(t_top2)

            //soft tempo
            let st_top = t_top + 30;
            let st_bot = t_bot + 20;
            document.getElementById("st").textContent = formatTime(st_bot) + "~" + formatTime(st_top)
            let st_top8 = ((st_top / 1609) * 800);
            let st_bot8 = ((st_bot / 1609) * 800);
            document.getElementById("st_800").textContent = formatTime(st_bot8) + "~" + formatTime(st_top8)
            let st_top4 = st_top8 / 2;
            let st_bot4 = st_bot8 / 2;
            document.getElementById("st_400").textContent = formatTime(st_bot4) + "~" + formatTime(st_top4)
            let st_top2 = st_top8 / 4;
            let st_bot2 = st_bot8 / 4;
            document.getElementById("st_200").textContent = formatTime(st_bot2) + "~" + formatTime(st_top2)

            //extensive tempo
            let et_top = ((two * 1.3333) / 200) * 1609;
            document.getElementById("et").textContent = formatTime(et_top)
            let et_top8 = (two * 1.3333) * 4;
            document.getElementById("et_800").textContent = formatTime(et_top8)
            let et_top4 = (two * 1.3333) * 2;
            document.getElementById("et_400").textContent = formatTime(et_top4)
            let et_top2 = (two * 1.3333);
            document.getElementById("et_200").textContent = formatTime(et_top2)

            //intensive tempo
            let it_top = ((one * 1.25) / 100) * 1609;
            let it_bot = ((one * 1.1111) / 100) * 1609;
            document.getElementById("it").textContent = formatTime(it_bot) + "~" + formatTime(it_top)
            let it_top2 = (one * 1.25) * 2;
            let it_bot2 = (one * 1.1111) * 2;
            document.getElementById("it_200").textContent = formatTime(it_bot2) + "~" + formatTime(it_top2)
            let it_top8 = it_top2 * 4;
            let it_bot8 = it_bot2 * 4;
            document.getElementById("it_800").textContent = formatTime(it_bot8) + "~" + formatTime(it_top8)
            let it_top4 = it_top2 * 2;
            let it_bot4 = it_bot2 * 2;
            document.getElementById("it_400").textContent = formatTime(it_bot4) + "~" + formatTime(it_top4)



        }
        // Clear input fields
        document.getElementById("min").value = "";
        document.getElementById("sec").value = "";
    }

});
