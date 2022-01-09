# GPUs AMD

## GPUs AMD Nativas

### **Navi Série 23**

#### Suporte Recente: macOS 12 Monterey
#### Suporte Inicial: macOS 12.1 Monterey

A partir do macOS 12.1 Monterey, a Apple adicionou suporte para as placas RX 6600 XT.

Placas suportadas:

* RX 6600 XT

*Kexts* necessários:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **Navi Série 21**

#### Suporte Recente: macOS 12 Monterey
#### Suporte Inicial: macOS 11.4 Big Sur

A partir do macOS 11.4 Big Sur, a Apple adicionou suporte para placas Navi da série 21!

Placas suportadas:

* RX 6800
* RX 6800 XT
* RX 6900 XT
  * A variante XTXH (DeviceID: `0x73AF`) é suportada ao combinar o WhateverGreen v1.5.2 com `device-id` configurado para `0x73AE`.

Observação: algumas placas Navi 21 atualmente precisam do argumento de inicialização `agdpmod=pikera` para exibirem imagens.

*Kexts* necessários:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **Navi Série 10**

#### Suporte Recente: macOS 12 Monterey
#### Suporte Inicial: macOS 10.15.1 Catalina

Atualmente, desde o 10.15.1, a Apple finalmente adicionou suporte a RDNA e Navi!

Placas suportadas:

* RX 5500
* RX 5500 XT
* RX 5600
* RX 5600 XT
* RX 5700
* RX 5700 XT
* RX 5700 XT 50th Anniversary Edition

Radeon Pro:

* Radeon Pro W5500
* Radeon Pro W5700

Observação: a maioria das placas Navi atualmente exigem o uso do argumento de boot `agdpmod=pikera` para ter saída de vídeo apropriada.

*Kexts* necessárias:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

**Observação importante para usuários de placas Navi da MSI**:

* Instaladores do macOS 10.15 Catalina e anteriores possuem um bug de VBIOS que trava os instaladores se uma placa Navi da MSI estiver presente. Isso pode ser resolvido injetando `ATY,Rom#` nas `DeviceProperties` usando qualquer valor. Veja mais detalhes aqui: [Installer not working with 5700XT #901](https://github.com/acidanthera/bugtracker/issues/901) (em inglês).
* As linhas Polaris e Vega da MSI não são afetadas por este bug.

### **Vega Série 20**
#### Suporte Recente: macOS 12 Monterey
#### Suporte Inicial: macOS 10.14.5 Mojave

Todas as GPUs Vega são suportadas nativamente pelo macOS com GPUs Vega 20 iniciando no macOS 10.14 Mojave.

Placas suportadas:

* Radeon VII

*Kexts* necessárias:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **Vega Série 10**
#### Suporte Recente: macOS 12 Monterey
#### Suporte Inicial: macOS 10.13 High Sierra

Assim como com a Vega 20, as GPUs Vega 10 possuem suporte nativo no macOS, embora o suporte a elas tenha iniciado no macOS 10.13 High Sierra.

E para aqueles que queiram fazer *overclock* ou *undervolt*, veja [PyVega](https://github.com/corpnewt/PyVega).

A única marca de GPUs Vega 10 a se **evitar são as da XFX**. O motivo para isso é que elas possuem problemas de comunicação na VBIOS que não podem ser facilmente solucionados usando uma BIOS de referência. Isso se dá devido a forma como a tabela *powerplay* das GPUs Vega interagem entre o sistema operacional e a placa de vídeo.

Placas suportadas:

* Vega 64 Liquid
* Vega 64
* Vega 56

Radeon Pro:

* Vega Frontier Edition
* Radeon Pro WX 9100

*Kexts* necessárias:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **Polaris Séries 10 e 20**
#### Suporte Recente: macOS 12 Monterey
#### Suporte Inicial: macOS 10.12 Sierra

Em se tratando de GPUs Polaris, basicamente todo modelo de placa é suportado desde que esteja utilizando um núcleo Polaris ou Baffin. Placas de entrada como a RX550 utilizam um núcleo Lexa, o que significa zero suporte no macOS.

As marcas de GPUs da série Polaris que **você deve evitar** são XFX, PowerColour, HIS e VisionTek. Muitos usuários tiveram problemas com essas placas ao exibir o Clover e na inicialização do macOS. Outros usuários encontraram soluções/gambiarras, mas nada muito consistente. Isso parece ser causado pelo fato de possuírem uma VBIOS esquisita que não se comunica muito bem com o macOS. A única solução de verdade é flashear outra VBIOS, o que não é ideal para a maioria dos usuários.

Placas suportadas:

Série 400:

* RX 480
* RX 470D
* RX 470
* RX 460

Série 500:

* RX 590
* RX 580X
* RX 580
* RX 570X
* RX 570
* RX 560X
* RX 560
* RX 550 (Baffin core)

Radeon Pro:

* WX 7100
* WX 5100
* WX 4100
* E9550

*Kexts* necessárias:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **R7/R9**
#### Suporte Recente: macOS 12 Monterey
#### Suporte Inicial: OS X 10.10 Yosemite

Placas R7 e R9 também são suportadas nativamente sem muitos problemas, porém não é possível garantir sucesso com placas R5 e R7 por não haver muitos relatos de sucesso com elas. Também lembre-se de que placas que diferem do design de referência podem apresentar muitos outros problemas que darão mais trabalho para resolver. As placas Sapphire são a melhor aposta. Por fim, as placas R9 280X/380X são inconsistentes no quesito compatibilidade.

Placas suportadas:

* R9 Fury X
* R9 Fury
* R9 Nano
* R9 390 (necessário FakeID)
* R9 290X/390X
* R9 290/390 (necessário FakeID)
* R9 280X/380X (inconsistente)
* R9 280/380 (necessário FakeID)
* R9 270X/370X
* R7 270/370 (necessário FakeID)
* R7 265
* R7 260x/360x
* R9 260/360 (FakeID talvez seja necessário dependendo do modelo)
* R9 255
* R7 250X
* R7 250 (necessário FakeID)
* R7 240 (necessário FakeID)

*Kexts* necessárias:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:

* `radpg=15`: exigido para a inicialização das GPUs HD 7730/7750/7770/R7 250/R7 250X.
* Argumento de boot `-raddvi`: Corrige a DVI, exigido para 290X, 370 etc.
* InjectAMD: Embora descontinuado, alguns usuários precisam disso para ter inicialização apropriada. Evite usar a não ser que seja absolutamente necessário.
* [Guia Aplicando um FakeID](https://deomkds.github.io/Getting-Started-With-ACPI/Universal/spoof.html)

### **Série HD 8000 (8xxx)**
#### Suporte Recente: macOS 12 Monterey
#### Suporte Inicial: OS X 10.8 Mountain Lion

Placas suportadas:

* HD 8740
* HD 8760
* HD 8770
* HD 8850
* HD 8870
* HD 8890
* HD 8950
* HD 8970

### **Série HD 7000 (7xxx)**
#### Suporte Recente: macOS 12 Monterey
#### Suporte Inicial: OS X 10.8 Mountain Lion

Placas suportadas:

* Dual AMD FirePro D300
* Dual AMD FirePro D500
* Dual AMD FirePro D700
* FirePro W5100 (necessário FakeID)
* FirePro W7000
* FirePro W9000
* HD 7700
* HD 7730
* HD 7750
* HD 7770
* HD 7790
* HD 7850
* HD 7870
* HD 7870 XT
* HD 7950
* HD 7970
* HD 7990

*Kexts* necessárias:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

Extras:

* `radpg=15`: exigido para a inicialização das GPUs HD 7730/7750/7770/R7 250/R7 250X.
* InjectAMD: Embora descontinuado, alguns usuários precisam disso para ter inicialização apropriada. Evite usar a não ser que seja absolutamente necessário.

## GPUs AMD Não Suportadas

### **Navi Série 2X**
#### Suporte Recente: Nenhum

Embora Navi 21 e 23 sejam suportadas, os outros núcleos não o são no momento da escrita desse guia.

Placas não suportadas:

* RX 6700 XT
* RX 6600

### **Série Lexa**
#### Suporte Recente: Nenhum

Embora essas GPUs compartilhem o mesmo nome de família das GPUs Polaris, essas placas são drasticamente diferentes. Isso significa que não há suporte em nenhuma versão do macOS para elas. Similar às Navi e às GPUs não suportadas da Nvidia, será necessário desativar as GPUs Lexa devido a como os drivers VESA que essas GPUs usam quebram a suspensão e outros recursos do macOS. Por favor, refira-se ao guia sobre como [desativar GPUs não suportadas](https://www.reddit.com/r/hackintosh/comments/bu1wf8/how_to_disable_your_unsupported_gpu_for_macos/) no macOS.

Placas não suportadas:

* WX 3100
* WX 2100
* RX 550X (Lexa core)
* RX 550 (Lexa core)
* RX 540X
* RX 540

### **APUs da AMD (TODAS AS VARIANTES)**
#### Suporte Recente: Nenhum

As GPUs integradas encontradas em CPUs AMD de entrada nunca tiveram suporte oficial e o suporte por parte da comunidade é fraco. Embora seja possível conseguir uma saída de vídeo com um pouco de esforço, aceleração gráfica é basicaente impossível.

APUs não suportadas:

* Vega 11 (Zen)
* Vega 8 (Zen)
* GCN 3 (Escavator 2ª geração, Steamroller)
* GCN 2 (Escavator 1ª geração, Puma, Puma+)

