EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 2 4
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L power:GND #PWR0101
U 1 1 5E5A7118
P 3750 1450
F 0 "#PWR0101" H 3750 1200 50  0001 C CNN
F 1 "GND" H 3755 1277 50  0000 C CNN
F 2 "" H 3750 1450 50  0001 C CNN
F 3 "" H 3750 1450 50  0001 C CNN
	1    3750 1450
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0102
U 1 1 5E5A711E
P 3250 1450
F 0 "#PWR0102" H 3250 1200 50  0001 C CNN
F 1 "GND" H 3255 1277 50  0000 C CNN
F 2 "" H 3250 1450 50  0001 C CNN
F 3 "" H 3250 1450 50  0001 C CNN
	1    3250 1450
	1    0    0    -1  
$EndComp
Wire Wire Line
	3250 1450 3250 1250
$Comp
L Diode:1N5822 D1
U 1 1 5E5A7125
P 4400 1400
F 0 "D1" V 4354 1479 50  0000 L CNN
F 1 "BZT52C10" V 4445 1479 50  0000 L CNN
F 2 "Diode_SMD:D_SMA_Handsoldering" H 4400 1225 50  0001 C CNN
F 3 "http://www.vishay.com/docs/88526/1n5820.pdf" H 4400 1400 50  0001 C CNN
	1    4400 1400
	0    1    1    0   
$EndComp
Wire Wire Line
	4250 1250 4400 1250
$Comp
L power:GND #PWR0103
U 1 1 5E5A712C
P 4400 1550
F 0 "#PWR0103" H 4400 1300 50  0001 C CNN
F 1 "GND" H 4405 1377 50  0000 C CNN
F 2 "" H 4400 1550 50  0001 C CNN
F 3 "" H 4400 1550 50  0001 C CNN
	1    4400 1550
	1    0    0    -1  
$EndComp
$Comp
L Device:L L1
U 1 1 5E5A7134
P 5100 1250
F 0 "L1" V 5290 1250 50  0000 C CNN
F 1 "33uH" V 5199 1250 50  0000 C CNN
F 2 "Inductor_SMD:L_Neosid_SM-NE127_HandSoldering" H 5100 1250 50  0001 C CNN
F 3 "~" H 5100 1250 50  0001 C CNN
	1    5100 1250
	0    -1   -1   0   
$EndComp
Connection ~ 4400 1250
$Comp
L Device:CP C2
U 1 1 5E5A713B
P 5800 1400
F 0 "C2" H 5918 1446 50  0000 L CNN
F 1 "220uF/35V" H 5918 1355 50  0000 L CNN
F 2 "Capacitor_SMD:CP_Elec_10x10" H 5838 1250 50  0001 C CNN
F 3 "~" H 5800 1400 50  0001 C CNN
	1    5800 1400
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0104
U 1 1 5E5A7141
P 5800 1550
F 0 "#PWR0104" H 5800 1300 50  0001 C CNN
F 1 "GND" H 5805 1377 50  0000 C CNN
F 2 "" H 5800 1550 50  0001 C CNN
F 3 "" H 5800 1550 50  0001 C CNN
	1    5800 1550
	1    0    0    -1  
$EndComp
Wire Wire Line
	4400 1250 4950 1250
Wire Wire Line
	5250 1250 5450 1250
$Comp
L power:GND #PWR0105
U 1 1 5E5A7151
P 3000 1400
F 0 "#PWR0105" H 3000 1150 50  0001 C CNN
F 1 "GND" H 3005 1227 50  0000 C CNN
F 2 "" H 3000 1400 50  0001 C CNN
F 3 "" H 3000 1400 50  0001 C CNN
	1    3000 1400
	1    0    0    -1  
$EndComp
Wire Wire Line
	5450 950  5450 1250
Text Notes 850  1200 0    50   ~ 0
\nInput:\nDC 12 V - 32 V\nOutput:\n5 V at 2.5 A\nTemp:\n30 °C\n
Text Notes 3050 700  0    50   ~ 0
https://webench.ti.com
Text Label 2300 1050 0    50   ~ 0
DCIN
$Comp
L Regulator_Linear:XC6206PxxxMR U?
U 1 1 5E4F9DCD
P 7050 2150
AR Path="/5E4F9DCD" Ref="U?"  Part="1" 
AR Path="/5E5A9B9C/5E4F9DCD" Ref="U?"  Part="1" 
AR Path="/5E55BC8E/5E4F9DCD" Ref="U2"  Part="1" 
F 0 "U2" H 7050 2392 50  0000 C CNN
F 1 "XC6206P182MR" H 7050 2301 50  0000 C CNN
F 2 "Package_TO_SOT_SMD:SOT-23" H 7050 2375 50  0001 C CIN
F 3 "https://www.torexsemi.com/file/xc6206/XC6206.pdf" H 7050 2150 50  0001 C CNN
	1    7050 2150
	1    0    0    -1  
$EndComp
Connection ~ 5800 1250
Text GLabel 5550 1050 2    50   Input ~ 0
VBAT
$Comp
L Device:C C6
U 1 1 5E514A36
P 8550 1400
F 0 "C6" H 8350 1300 50  0000 L CNN
F 1 "10uF tantalum" H 8600 1300 50  0000 L CNN
F 2 "Capacitor_SMD:C_1210_3225Metric_Pad1.42x2.65mm_HandSolder" H 8588 1250 50  0001 C CNN
F 3 "~" H 8550 1400 50  0001 C CNN
	1    8550 1400
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0106
U 1 1 5E51542B
P 8550 1550
F 0 "#PWR0106" H 8550 1300 50  0001 C CNN
F 1 "GND" H 8555 1377 50  0000 C CNN
F 2 "" H 8550 1550 50  0001 C CNN
F 3 "" H 8550 1550 50  0001 C CNN
	1    8550 1550
	1    0    0    -1  
$EndComp
$Comp
L Device:C C4
U 1 1 5E516882
P 6900 1400
F 0 "C4" H 6700 1300 50  0000 L CNN
F 1 "10uF tantalum" H 6950 1250 50  0000 L CNN
F 2 "Capacitor_SMD:C_1210_3225Metric_Pad1.42x2.65mm_HandSolder" H 6938 1250 50  0001 C CNN
F 3 "~" H 6900 1400 50  0001 C CNN
	1    6900 1400
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0107
U 1 1 5E516F33
P 6900 1600
F 0 "#PWR0107" H 6900 1350 50  0001 C CNN
F 1 "GND" H 6905 1427 50  0000 C CNN
F 2 "" H 6900 1600 50  0001 C CNN
F 3 "" H 6900 1600 50  0001 C CNN
	1    6900 1600
	1    0    0    -1  
$EndComp
Wire Wire Line
	6900 1550 6900 1600
$Comp
L Device:C C3
U 1 1 5E52740B
P 6450 2300
F 0 "C3" H 6250 2200 50  0000 L CNN
F 1 "106" H 6200 2100 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric_Pad1.15x1.40mm_HandSolder" H 6488 2150 50  0001 C CNN
F 3 "~" H 6450 2300 50  0001 C CNN
	1    6450 2300
	1    0    0    -1  
$EndComp
$Comp
L Device:C C5
U 1 1 5E5276B3
P 7700 2300
F 0 "C5" H 7500 2200 50  0000 L CNN
F 1 "106" H 7450 2100 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric_Pad1.15x1.40mm_HandSolder" H 7738 2150 50  0001 C CNN
F 3 "~" H 7700 2300 50  0001 C CNN
	1    7700 2300
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0108
U 1 1 5E527AB6
P 7700 2450
F 0 "#PWR0108" H 7700 2200 50  0001 C CNN
F 1 "GND" H 7705 2277 50  0000 C CNN
F 2 "" H 7700 2450 50  0001 C CNN
F 3 "" H 7700 2450 50  0001 C CNN
	1    7700 2450
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0109
U 1 1 5E527DB7
P 6450 2450
F 0 "#PWR0109" H 6450 2200 50  0001 C CNN
F 1 "GND" H 6455 2277 50  0000 C CNN
F 2 "" H 6450 2450 50  0001 C CNN
F 3 "" H 6450 2450 50  0001 C CNN
	1    6450 2450
	1    0    0    -1  
$EndComp
Wire Wire Line
	6450 2150 6750 2150
Wire Wire Line
	7350 2150 7700 2150
$Comp
L power:GND #PWR0110
U 1 1 5E5298ED
P 7050 2450
F 0 "#PWR0110" H 7050 2200 50  0001 C CNN
F 1 "GND" H 7055 2277 50  0000 C CNN
F 2 "" H 7050 2450 50  0001 C CNN
F 3 "" H 7050 2450 50  0001 C CNN
	1    7050 2450
	1    0    0    -1  
$EndComp
Wire Wire Line
	7700 2150 7950 2150
Wire Wire Line
	7950 2150 7950 2000
Connection ~ 7700 2150
Text GLabel 7950 2000 2    50   Input ~ 0
VDD_1V8
$Comp
L Connector:Jack-DC J1
U 1 1 5E52B139
P 2000 1150
F 0 "J1" H 2057 1475 50  0000 C CNN
F 1 "Jack-DC" H 2057 1384 50  0000 C CNN
F 2 "Connector_BarrelJack:BarrelJack_Horizontal" H 2050 1110 50  0001 C CNN
F 3 "~" H 2050 1110 50  0001 C CNN
	1    2000 1150
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0111
U 1 1 5E52BC10
P 2300 1450
F 0 "#PWR0111" H 2300 1200 50  0001 C CNN
F 1 "GND" H 2305 1277 50  0000 C CNN
F 2 "" H 2300 1450 50  0001 C CNN
F 3 "" H 2300 1450 50  0001 C CNN
	1    2300 1450
	1    0    0    -1  
$EndComp
Wire Wire Line
	2300 1450 2300 1250
$Comp
L Regulator_Linear:AMS1117-3.3 U3
U 1 1 5E6C2628
P 7700 1250
F 0 "U3" H 7700 1492 50  0000 C CNN
F 1 "AMS1117-3.3" H 7700 1401 50  0000 C CNN
F 2 "Package_TO_SOT_SMD:SOT-223-3_TabPin2" H 7700 1450 50  0001 C CNN
F 3 "http://www.advanced-monolithic.com/pdf/ds1117.pdf" H 7800 1000 50  0001 C CNN
	1    7700 1250
	1    0    0    -1  
$EndComp
Wire Wire Line
	7400 1250 6900 1250
Connection ~ 6900 1250
Wire Wire Line
	8000 1250 8550 1250
$Comp
L power:GND #PWR0112
U 1 1 5E6C5C25
P 7700 1550
F 0 "#PWR0112" H 7700 1300 50  0001 C CNN
F 1 "GND" H 7705 1377 50  0000 C CNN
F 2 "" H 7700 1550 50  0001 C CNN
F 3 "" H 7700 1550 50  0001 C CNN
	1    7700 1550
	1    0    0    -1  
$EndComp
$Comp
L Device:C C7
U 1 1 5E63BE73
P 9400 1400
F 0 "C7" H 9200 1300 50  0000 L CNN
F 1 "104" H 9450 1250 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric_Pad1.15x1.40mm_HandSolder" H 9438 1250 50  0001 C CNN
F 3 "~" H 9400 1400 50  0001 C CNN
	1    9400 1400
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0113
U 1 1 5E63CD99
P 9400 1550
F 0 "#PWR0113" H 9400 1300 50  0001 C CNN
F 1 "GND" H 9405 1377 50  0000 C CNN
F 2 "" H 9400 1550 50  0001 C CNN
F 3 "" H 9400 1550 50  0001 C CNN
	1    9400 1550
	1    0    0    -1  
$EndComp
Text GLabel 9800 1250 2    50   Input ~ 0
VDD_3V3
Wire Wire Line
	9400 1250 9800 1250
$Comp
L Connector:Screw_Terminal_01x02 J2
U 1 1 5E693EC4
P 2100 2300
F 0 "J2" H 2018 1975 50  0000 C CNN
F 1 "DCIN" H 2018 2066 50  0000 C CNN
F 2 "TerminalBlock:TerminalBlock_bornier-2_P5.08mm" H 2100 2300 50  0001 C CNN
F 3 "~" H 2100 2300 50  0001 C CNN
	1    2100 2300
	-1   0    0    1   
$EndComp
$Comp
L power:GND #PWR0114
U 1 1 5E69512B
P 2300 2300
F 0 "#PWR0114" H 2300 2050 50  0001 C CNN
F 1 "GND" H 2305 2127 50  0000 C CNN
F 2 "" H 2300 2300 50  0001 C CNN
F 3 "" H 2300 2300 50  0001 C CNN
	1    2300 2300
	1    0    0    -1  
$EndComp
Wire Wire Line
	2300 2200 2500 2200
$Comp
L Device:CP C1
U 1 1 5E73EBC0
P 3000 1250
F 0 "C1" H 3118 1296 50  0000 L CNN
F 1 "680uF-50V" V 2750 850 50  0000 L CNN
F 2 "Capacitor_SMD:CP_Elec_10x10" H 3038 1100 50  0001 C CNN
F 3 "~" H 3000 1250 50  0001 C CNN
	1    3000 1250
	1    0    0    -1  
$EndComp
Wire Wire Line
	3000 1100 3000 1050
Wire Wire Line
	3000 1050 3250 1050
Wire Wire Line
	2700 1050 2700 750 
Wire Wire Line
	2700 750  1550 750 
Wire Wire Line
	1550 750  1550 1850
Wire Wire Line
	1550 1850 2500 1850
Wire Wire Line
	2500 1850 2500 2200
$Comp
L Device:D D3
U 1 1 5E744BE5
P 5000 2350
F 0 "D3" H 5000 2134 50  0000 C CNN
F 1 "D" H 5000 2225 50  0000 C CNN
F 2 "Diode_SMD:D_SMA_Handsoldering" H 5000 2350 50  0001 C CNN
F 3 "~" H 5000 2350 50  0001 C CNN
	1    5000 2350
	1    0    0    -1  
$EndComp
$Comp
L Device:D D2
U 1 1 5E7454CB
P 5300 2350
F 0 "D2" H 5300 2134 50  0000 C CNN
F 1 "D" H 5300 2225 50  0000 C CNN
F 2 "Diode_SMD:D_SMA_Handsoldering" H 5300 2350 50  0001 C CNN
F 3 "~" H 5300 2350 50  0001 C CNN
	1    5300 2350
	1    0    0    -1  
$EndComp
Wire Wire Line
	9400 1250 8550 1250
Connection ~ 9400 1250
Connection ~ 8550 1250
$Comp
L Regulator_Switching:LM2596S-5 U1
U 1 1 5E85E60B
P 3750 1150
F 0 "U1" H 3750 1517 50  0000 C CNN
F 1 "LM2596S-5" H 3750 1426 50  0000 C CNN
F 2 "Package_TO_SOT_SMD:TO-263-5_TabPin3" H 3800 900 50  0001 L CIN
F 3 "http://www.ti.com/lit/ds/symlink/lm2596.pdf" H 3750 1150 50  0001 C CNN
	1    3750 1150
	1    0    0    -1  
$EndComp
Wire Wire Line
	4250 950  4250 1050
Wire Wire Line
	4250 950  5450 950 
Wire Wire Line
	2300 1050 2700 1050
$Comp
L Device:Fuse_Small F1
U 1 1 5E863D37
P 2900 1050
F 0 "F1" H 2900 1235 50  0000 C CNN
F 1 "Fuse_Small" H 2900 1144 50  0000 C CNN
F 2 "Fuse:Fuse_1806_4516Metric" H 2900 1050 50  0001 C CNN
F 3 "~" H 2900 1050 50  0001 C CNN
	1    2900 1050
	1    0    0    -1  
$EndComp
Connection ~ 3000 1050
Wire Wire Line
	2800 1050 2700 1050
Connection ~ 2700 1050
$Comp
L Connector:Conn_01x03_Male J13
U 1 1 5E829520
P 4550 2450
F 0 "J13" H 4658 2731 50  0000 C CNN
F 1 "bat2dc" H 4658 2640 50  0000 C CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x03_P2.54mm_Vertical" H 4550 2450 50  0001 C CNN
F 3 "~" H 4550 2450 50  0001 C CNN
	1    4550 2450
	1    0    0    -1  
$EndComp
Wire Wire Line
	5450 1250 5450 2350
Connection ~ 5450 1250
Wire Wire Line
	4750 2450 5550 2450
Wire Wire Line
	5550 2450 5550 1250
Wire Wire Line
	5550 1250 5800 1250
Wire Wire Line
	4850 2350 4750 2350
Wire Wire Line
	5550 1050 5550 1250
Connection ~ 5550 1250
$Comp
L Battery_Management:MCP73831-2-OT U10
U 1 1 5E858CAD
P 3200 3550
F 0 "U10" H 3250 3950 50  0000 C CNN
F 1 "MCP73831-2-OT" H 3550 3850 50  0000 C CNN
F 2 "Package_TO_SOT_SMD:SOT-23-5" H 3250 3300 50  0001 L CIN
F 3 "http://ww1.microchip.com/downloads/en/DeviceDoc/20001984g.pdf" H 3050 3500 50  0001 C CNN
	1    3200 3550
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR04
U 1 1 5E85A327
P 3200 3850
F 0 "#PWR04" H 3200 3600 50  0001 C CNN
F 1 "GND" H 3205 3677 50  0000 C CNN
F 2 "" H 3200 3850 50  0001 C CNN
F 3 "" H 3200 3850 50  0001 C CNN
	1    3200 3850
	1    0    0    -1  
$EndComp
$Comp
L Connector:USB_B_Mini J9
U 1 1 5E85AD11
P 1450 3600
F 0 "J9" H 1507 4067 50  0000 C CNN
F 1 "USB_B_Mini" H 1507 3976 50  0000 C CNN
F 2 "Connector_USB:USB_Mini-B_Lumberg_2486_01_Horizontal" H 1600 3550 50  0001 C CNN
F 3 "~" H 1600 3550 50  0001 C CNN
	1    1450 3600
	1    0    0    -1  
$EndComp
Wire Wire Line
	3200 3250 3200 3200
Wire Wire Line
	3200 3200 2300 3200
Wire Wire Line
	1900 3200 1900 3400
Wire Wire Line
	1900 3400 1750 3400
Wire Wire Line
	1350 4000 1400 4000
$Comp
L power:GND #PWR01
U 1 1 5E85EBCF
P 1400 4000
F 0 "#PWR01" H 1400 3750 50  0001 C CNN
F 1 "GND" H 1405 3827 50  0000 C CNN
F 2 "" H 1400 4000 50  0001 C CNN
F 3 "" H 1400 4000 50  0001 C CNN
	1    1400 4000
	1    0    0    -1  
$EndComp
Connection ~ 1400 4000
Wire Wire Line
	1400 4000 1450 4000
$Comp
L Device:R R28
U 1 1 5E85FE49
P 2700 3900
F 0 "R28" H 2770 3946 50  0000 L CNN
F 1 "2K" H 2770 3855 50  0000 L CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.15x1.40mm_HandSolder" V 2630 3900 50  0001 C CNN
F 3 "~" H 2700 3900 50  0001 C CNN
	1    2700 3900
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR03
U 1 1 5E860745
P 2700 4050
F 0 "#PWR03" H 2700 3800 50  0001 C CNN
F 1 "GND" H 2705 3877 50  0000 C CNN
F 2 "" H 2700 4050 50  0001 C CNN
F 3 "" H 2700 4050 50  0001 C CNN
	1    2700 4050
	1    0    0    -1  
$EndComp
Wire Wire Line
	2700 3750 2700 3650
Wire Wire Line
	2700 3650 2800 3650
NoConn ~ 1750 3600
NoConn ~ 1750 3700
NoConn ~ 1750 3800
$Comp
L Device:LED D13
U 1 1 5E87BF97
P 3850 4150
F 0 "D13" H 3843 4366 50  0000 C CNN
F 1 "LED" H 3843 4275 50  0000 C CNN
F 2 "LED_SMD:LED_0805_2012Metric_Pad1.15x1.40mm_HandSolder" H 3850 4150 50  0001 C CNN
F 3 "~" H 3850 4150 50  0001 C CNN
	1    3850 4150
	1    0    0    -1  
$EndComp
$Comp
L Device:R R29
U 1 1 5E87CA0A
P 4150 4150
F 0 "R29" H 4220 4196 50  0000 L CNN
F 1 "2K" H 4220 4105 50  0000 L CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.15x1.40mm_HandSolder" V 4080 4150 50  0001 C CNN
F 3 "~" H 4150 4150 50  0001 C CNN
	1    4150 4150
	0    1    1    0   
$EndComp
Wire Wire Line
	3700 4150 3600 4150
Wire Wire Line
	3600 4150 3600 3650
$Comp
L Device:C C34
U 1 1 5E87DDDF
P 2300 3450
F 0 "C34" H 2100 3350 50  0000 L CNN
F 1 "4u7" H 2350 3350 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric_Pad1.15x1.40mm_HandSolder" H 2338 3300 50  0001 C CNN
F 3 "~" H 2300 3450 50  0001 C CNN
	1    2300 3450
	1    0    0    -1  
$EndComp
Wire Wire Line
	2300 3300 2300 3200
Connection ~ 2300 3200
Wire Wire Line
	2300 3200 1900 3200
$Comp
L power:GND #PWR02
U 1 1 5E87F492
P 2300 3750
F 0 "#PWR02" H 2300 3500 50  0001 C CNN
F 1 "GND" H 2305 3577 50  0000 C CNN
F 2 "" H 2300 3750 50  0001 C CNN
F 3 "" H 2300 3750 50  0001 C CNN
	1    2300 3750
	1    0    0    -1  
$EndComp
Wire Wire Line
	2300 3750 2300 3600
$Comp
L Device:C C41
U 1 1 5E881E53
P 4150 3550
F 0 "C41" H 3950 3450 50  0000 L CNN
F 1 "4u7" H 4200 3450 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric_Pad1.15x1.40mm_HandSolder" H 4188 3400 50  0001 C CNN
F 3 "~" H 4150 3550 50  0001 C CNN
	1    4150 3550
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR05
U 1 1 5E881E5D
P 4150 3850
F 0 "#PWR05" H 4150 3600 50  0001 C CNN
F 1 "GND" H 4155 3677 50  0000 C CNN
F 2 "" H 4150 3850 50  0001 C CNN
F 3 "" H 4150 3850 50  0001 C CNN
	1    4150 3850
	1    0    0    -1  
$EndComp
Wire Wire Line
	4150 3850 4150 3800
Wire Wire Line
	3600 3450 3750 3450
Wire Wire Line
	3750 3450 3750 3400
Wire Wire Line
	3750 3400 4150 3400
Wire Wire Line
	4150 3400 4550 3400
Wire Wire Line
	4550 3400 4550 3500
Connection ~ 4150 3400
$Comp
L Connector:Conn_01x02_Male J20
U 1 1 5E88859A
P 4750 3600
F 0 "J20" H 4722 3482 50  0000 R CNN
F 1 "con_bat" H 4722 3573 50  0000 R CNN
F 2 "Connector_JST:JST_PH_B2B-PH-K_1x02_P2.00mm_Vertical" H 4750 3600 50  0001 C CNN
F 3 "~" H 4750 3600 50  0001 C CNN
	1    4750 3600
	-1   0    0    1   
$EndComp
Wire Wire Line
	4550 3600 4550 3800
Wire Wire Line
	4550 3800 4150 3800
Connection ~ 4150 3800
Wire Wire Line
	4150 3800 4150 3700
Wire Wire Line
	4300 4150 4450 4150
Wire Wire Line
	4450 4150 4450 4450
Wire Wire Line
	4450 4450 1900 4450
Wire Wire Line
	1900 4450 1900 3400
Connection ~ 1900 3400
$Comp
L MCU_Microchip_ATmega:ATmega8-16AU U13
U 1 1 5E88CABA
P 5700 5800
F 0 "U13" H 5900 7300 50  0000 C CNN
F 1 "ATmega8-16AU" H 6150 7200 50  0000 C CNN
F 2 "Package_QFP:TQFP-32_7x7mm_P0.8mm" H 5700 5800 50  0001 C CIN
F 3 "http://ww1.microchip.com/downloads/en/DeviceDoc/atmel-2486-8-bit-avr-microcontroller-atmega8_l_datasheet.pdf" H 5700 5800 50  0001 C CNN
	1    5700 5800
	1    0    0    -1  
$EndComp
NoConn ~ 5100 4900
NoConn ~ 5100 5100
$Comp
L Device:C C51
U 1 1 5E8D9DEF
P 4450 5450
F 0 "C51" H 4250 5350 50  0000 L CNN
F 1 "104" H 4500 5300 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric_Pad1.15x1.40mm_HandSolder" H 4488 5300 50  0001 C CNN
F 3 "~" H 4450 5450 50  0001 C CNN
	1    4450 5450
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR08
U 1 1 5E8DA84C
P 5750 7300
F 0 "#PWR08" H 5750 7050 50  0001 C CNN
F 1 "GND" H 5755 7127 50  0000 C CNN
F 2 "" H 5750 7300 50  0001 C CNN
F 3 "" H 5750 7300 50  0001 C CNN
	1    5750 7300
	1    0    0    -1  
$EndComp
Wire Wire Line
	5700 7300 5700 7200
Wire Wire Line
	5700 7300 5750 7300
Wire Wire Line
	5800 7200 5800 7300
Wire Wire Line
	5800 7300 5750 7300
Connection ~ 5750 7300
$Comp
L power:GND #PWR06
U 1 1 5E8DF453
P 4450 5600
F 0 "#PWR06" H 4450 5350 50  0001 C CNN
F 1 "GND" H 4455 5427 50  0000 C CNN
F 2 "" H 4450 5600 50  0001 C CNN
F 3 "" H 4450 5600 50  0001 C CNN
	1    4450 5600
	1    0    0    -1  
$EndComp
Wire Wire Line
	4450 5300 5100 5300
NoConn ~ 5100 5500
NoConn ~ 5100 5600
$Comp
L Device:R R35
U 1 1 5E8E4583
P 5000 4400
F 0 "R35" H 5070 4446 50  0000 L CNN
F 1 "2K" H 5070 4355 50  0000 L CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.15x1.40mm_HandSolder" V 4930 4400 50  0001 C CNN
F 3 "~" H 5000 4400 50  0001 C CNN
	1    5000 4400
	-1   0    0    1   
$EndComp
Wire Wire Line
	5000 4550 5000 4700
Wire Wire Line
	5000 4700 5100 4700
Wire Wire Line
	5000 4250 5000 4100
Wire Wire Line
	5800 4400 5700 4400
Wire Wire Line
	5700 4400 5700 4100
Wire Wire Line
	5000 4100 5700 4100
Connection ~ 5700 4400
Wire Wire Line
	5000 4100 4450 4100
Wire Wire Line
	4450 4100 4450 4150
Connection ~ 5000 4100
Connection ~ 4450 4150
Wire Wire Line
	5800 1250 6450 1250
Wire Wire Line
	6450 2150 6450 1250
Connection ~ 6450 2150
Connection ~ 6450 1250
Wire Wire Line
	6450 1250 6900 1250
Wire Wire Line
	6300 5000 6600 5000
Wire Wire Line
	6300 5100 6600 5100
Wire Wire Line
	6300 5200 6600 5200
Text Label 6450 5000 0    50   ~ 0
MOSI
Text Label 7600 5200 0    50   ~ 0
MISO
Text Label 6450 5200 0    50   ~ 0
SCK
Text Label 5000 4700 2    50   ~ 0
RST
NoConn ~ 6300 4700
NoConn ~ 6300 4800
NoConn ~ 6300 4900
NoConn ~ 6300 5600
NoConn ~ 6300 5700
NoConn ~ 6300 5800
NoConn ~ 6300 5900
NoConn ~ 6300 6100
NoConn ~ 6300 6200
NoConn ~ 6300 6300
$Comp
L Connector_Generic:Conn_02x03_Odd_Even J26
U 1 1 5E928581
P 7300 5100
F 0 "J26" H 7350 5417 50  0000 C CNN
F 1 "avrisp" H 7350 5326 50  0000 C CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_2x03_P2.54mm_Vertical" H 7300 5100 50  0001 C CNN
F 3 "~" H 7300 5100 50  0001 C CNN
	1    7300 5100
	1    0    0    -1  
$EndComp
Text Label 7100 5100 2    50   ~ 0
MOSI
Text Label 7600 5100 0    50   ~ 0
SCK
Text Label 7600 5000 0    50   ~ 0
RST
Text Label 5700 4200 0    50   ~ 0
VBUS
$Comp
L power:GND #PWR011
U 1 1 5E929A07
P 6950 4750
F 0 "#PWR011" H 6950 4500 50  0001 C CNN
F 1 "GND" H 6955 4577 50  0000 C CNN
F 2 "" H 6950 4750 50  0001 C CNN
F 3 "" H 6950 4750 50  0001 C CNN
	1    6950 4750
	1    0    0    -1  
$EndComp
Wire Wire Line
	6950 4750 7100 4750
Wire Wire Line
	7100 4750 7100 5000
Text Label 6450 5100 0    50   ~ 0
MISO
Connection ~ 4550 3400
Wire Wire Line
	4550 3400 5500 3400
Wire Wire Line
	5700 3100 5300 3100
Wire Wire Line
	3200 3100 3200 3200
Connection ~ 3200 3200
Text Label 7100 5200 2    50   ~ 0
VBUS
$Comp
L Device:R R36
U 1 1 5E9424B2
P 5300 3350
F 0 "R36" H 5450 3300 50  0000 L CNN
F 1 "100K" H 5400 3200 50  0000 L CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.15x1.40mm_HandSolder" V 5230 3350 50  0001 C CNN
F 3 "~" H 5300 3350 50  0001 C CNN
	1    5300 3350
	-1   0    0    1   
$EndComp
$Comp
L power:GND #PWR07
U 1 1 5E944D7C
P 5300 3600
F 0 "#PWR07" H 5300 3350 50  0001 C CNN
F 1 "GND" H 5305 3427 50  0000 C CNN
F 2 "" H 5300 3600 50  0001 C CNN
F 3 "" H 5300 3600 50  0001 C CNN
	1    5300 3600
	1    0    0    -1  
$EndComp
Wire Wire Line
	5300 3200 5300 3100
Connection ~ 5300 3100
Wire Wire Line
	5300 3100 3200 3100
Wire Wire Line
	5300 3600 5300 3500
Wire Wire Line
	4750 2550 4750 2750
$Comp
L Device:C C52
U 1 1 5E953FEF
P 6050 3550
F 0 "C52" H 6150 3600 50  0000 L CNN
F 1 "4u7" H 6100 3450 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric_Pad1.15x1.40mm_HandSolder" H 6088 3400 50  0001 C CNN
F 3 "~" H 6050 3550 50  0001 C CNN
	1    6050 3550
	1    0    0    -1  
$EndComp
Wire Wire Line
	6050 3400 5900 3400
$Comp
L power:GND #PWR09
U 1 1 5E956E21
P 6050 3800
F 0 "#PWR09" H 6050 3550 50  0001 C CNN
F 1 "GND" H 6055 3627 50  0000 C CNN
F 2 "" H 6050 3800 50  0001 C CNN
F 3 "" H 6050 3800 50  0001 C CNN
	1    6050 3800
	1    0    0    -1  
$EndComp
Wire Wire Line
	6050 3800 6050 3700
Wire Wire Line
	6050 3400 6050 2750
Wire Wire Line
	4750 2750 6050 2750
Connection ~ 6050 3400
$Comp
L Device:R R55
U 1 1 5E96099F
P 8550 5650
F 0 "R55" H 8620 5696 50  0000 L CNN
F 1 "7K5" H 8620 5605 50  0000 L CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.15x1.40mm_HandSolder" V 8480 5650 50  0001 C CNN
F 3 "~" H 8550 5650 50  0001 C CNN
	1    8550 5650
	-1   0    0    1   
$EndComp
$Comp
L Device:R R56
U 1 1 5E9611F1
P 8550 6100
F 0 "R56" H 8620 6146 50  0000 L CNN
F 1 "2K7" H 8620 6055 50  0000 L CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.15x1.40mm_HandSolder" V 8480 6100 50  0001 C CNN
F 3 "~" H 8550 6100 50  0001 C CNN
	1    8550 6100
	-1   0    0    1   
$EndComp
$Comp
L power:GND #PWR013
U 1 1 5E961444
P 8550 6250
F 0 "#PWR013" H 8550 6000 50  0001 C CNN
F 1 "GND" H 8555 6077 50  0000 C CNN
F 2 "" H 8550 6250 50  0001 C CNN
F 3 "" H 8550 6250 50  0001 C CNN
	1    8550 6250
	1    0    0    -1  
$EndComp
Wire Wire Line
	6300 6800 6550 6800
Text Label 6400 6800 0    50   ~ 0
STAT
Text Label 3600 4300 2    50   ~ 0
STAT
$Comp
L Connector:Conn_01x06_Male J22
U 1 1 5E971AA3
P 6900 6300
F 0 "J22" H 6872 6274 50  0000 R CNN
F 1 "bat_lvl" H 6872 6183 50  0000 R CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x06_P2.54mm_Vertical" H 6900 6300 50  0001 C CNN
F 3 "~" H 6900 6300 50  0001 C CNN
	1    6900 6300
	-1   0    0    -1  
$EndComp
Wire Wire Line
	6300 6400 6450 6400
Wire Wire Line
	6450 6400 6450 6100
Wire Wire Line
	6450 6100 6700 6100
Wire Wire Line
	6300 6500 6500 6500
Wire Wire Line
	6500 6500 6500 6200
Wire Wire Line
	6500 6200 6700 6200
Wire Wire Line
	6300 6600 6550 6600
Wire Wire Line
	6550 6600 6550 6300
Wire Wire Line
	6550 6300 6700 6300
Wire Wire Line
	6300 6700 6600 6700
Wire Wire Line
	6600 6700 6600 6400
Wire Wire Line
	6600 6400 6700 6400
Wire Wire Line
	6700 6500 6650 6500
Wire Wire Line
	6650 6500 6650 7000
Wire Wire Line
	6700 6600 6700 6900
Wire Wire Line
	6700 6900 6800 6900
Wire Wire Line
	6650 7000 6800 7000
Text Label 6700 6900 0    50   ~ 0
VBUS
$Comp
L power:GND #PWR010
U 1 1 5E993295
P 6800 7000
F 0 "#PWR010" H 6800 6750 50  0001 C CNN
F 1 "GND" H 6805 6827 50  0000 C CNN
F 2 "" H 6800 7000 50  0001 C CNN
F 3 "" H 6800 7000 50  0001 C CNN
	1    6800 7000
	1    0    0    -1  
$EndComp
Wire Wire Line
	4150 3400 4150 3250
Wire Wire Line
	3600 4150 3600 4300
Connection ~ 3600 4150
$Comp
L Transistor_FET:Si2319CDS Q7
U 1 1 5E99FE86
P 5700 3300
F 0 "Q7" V 5949 3300 50  0000 C CNN
F 1 "Si2319CDS" V 6040 3300 50  0000 C CNN
F 2 "Package_TO_SOT_SMD:SOT-23" H 5900 3225 50  0001 L CIN
F 3 "http://www.vishay.com/docs/66709/si2319cd.pdf" H 5700 3300 50  0001 L CNN
	1    5700 3300
	0    -1   1    0   
$EndComp
Wire Notes Line
	4300 2900 5750 2900
Wire Notes Line
	5750 2900 5750 2050
Wire Notes Line
	5750 2050 4300 2050
Wire Notes Line
	4300 2050 4300 2900
Text Notes 3900 2000 0    50   ~ 0
Switch header for Battery or DC input
Wire Wire Line
	8550 5800 8550 5850
$Comp
L Device:R R54
U 1 1 5EA40FAB
P 8250 5200
F 0 "R54" H 8320 5246 50  0000 L CNN
F 1 "100K" H 8320 5155 50  0000 L CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.15x1.40mm_HandSolder" V 8180 5200 50  0001 C CNN
F 3 "~" H 8250 5200 50  0001 C CNN
	1    8250 5200
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR012
U 1 1 5EA41A6D
P 8250 5350
F 0 "#PWR012" H 8250 5100 50  0001 C CNN
F 1 "GND" H 8255 5177 50  0000 C CNN
F 2 "" H 8250 5350 50  0001 C CNN
F 3 "" H 8250 5350 50  0001 C CNN
	1    8250 5350
	1    0    0    -1  
$EndComp
Wire Wire Line
	8250 5050 8250 5000
Wire Wire Line
	8550 5200 8550 5500
Wire Wire Line
	8350 4650 8550 4650
Wire Wire Line
	8550 4650 8550 4800
Wire Wire Line
	8550 5850 6600 5850
Connection ~ 8550 5850
Wire Wire Line
	8550 5850 8550 5950
Wire Wire Line
	6600 5850 6600 5500
Wire Wire Line
	6600 5500 6300 5500
$Comp
L Device:R R53
U 1 1 5EA6E193
P 8100 5000
F 0 "R53" H 8170 5046 50  0000 L CNN
F 1 "1K" H 8170 4955 50  0000 L CNN
F 2 "Resistor_SMD:R_0805_2012Metric_Pad1.15x1.40mm_HandSolder" V 8030 5000 50  0001 C CNN
F 3 "~" H 8100 5000 50  0001 C CNN
	1    8100 5000
	0    1    1    0   
$EndComp
Wire Wire Line
	7950 5000 7900 5000
Wire Wire Line
	7900 5000 7900 5400
Wire Wire Line
	7900 5400 6300 5400
Text GLabel 4150 3250 2    50   Input ~ 0
BAT_C
Text GLabel 8350 4650 0    50   Input ~ 0
BAT_C
$Comp
L Transistor_BJT:BC817 Q8
U 1 1 5EC72809
P 8450 5000
F 0 "Q8" H 8641 5046 50  0000 L CNN
F 1 "BC817" H 8641 4955 50  0000 L CNN
F 2 "Package_TO_SOT_SMD:SOT-23" H 8650 4925 50  0001 L CIN
F 3 "http://www.fairchildsemi.com/ds/BC/BC817.pdf" H 8450 5000 50  0001 L CNN
	1    8450 5000
	1    0    0    -1  
$EndComp
Connection ~ 8250 5000
Wire Notes Line
	7900 4550 8950 4550
Wire Notes Line
	8950 4550 8950 6500
Wire Notes Line
	8950 6500 7900 6500
Wire Notes Line
	7900 4550 7900 6500
Text Notes 9000 4600 0    50   ~ 0
Turn On only when doing ADC converter
Text Notes 9000 5250 0    50   ~ 0
Divide 3-4.2V down to 0.8-1.1V\ninternal AVR Vref 1.1V used here
Wire Notes Line
	6350 3000 6350 4000
Wire Notes Line
	6350 4000 5000 4000
Wire Notes Line
	5000 4000 5000 3000
Wire Notes Line
	5000 3000 6350 3000
Text Notes 6450 3600 0    50   ~ 0
MOSFet:\nWhen USB plugged, Q7 will turn off, battery charged normally, AVR turn on reading the battery level\nwhen USB removed, Q7 turn on, battery goes to load, AVR stop working
$EndSCHEMATC
