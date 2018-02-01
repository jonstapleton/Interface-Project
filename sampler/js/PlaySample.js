var synth = new Nexus.Rack("#synth");

            synth.freq.mode = 'impulse'
            synth.volume.mode = 'impulse'
            synth.mod.mode = 'impulse'
            synth.colorize("accent","#ff0")
            synth.colorize("fill","#4B0082")

            synth.freq.on('change',function(data) {
                if(data==true) {
                    sampler.start();
                }
            });
            synth.volume.on('change', function(data1) {
                if(data1==true) {
                    sampler1.start();
                }
            });