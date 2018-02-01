var sampler = new Tone.Player("samples/stockkick.wav", function() {
                console.log("sample loaded");
            });
            var sampler1 = new Tone.Player("samples/Dubstepsnare1.wav", function() {
                console.log("sample 1 loaded");
            });
            sampler.toMaster();
            sampler1.toMaster();