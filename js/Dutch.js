var i18n = {
error1: 'Sorry, er is een browser-error bij het starten van de simulator. We raden aan de laatste versie van Firefox en Chrome te gebruiken.',
Ground_connection: 'Massa',
Node_label: 'Probe label',
Voltage_source: 'Spanningsbron',
Current_source: 'Stroombron',
Resistor: 'Weerstand',
Capacitor: 'Condensator',
Inductor: 'Spoel',
Op_Amp: 'Op Amp',
Diode: 'Diode',
NFet: 'NFet',
PFet: 'PFet',
Voltage_probe: 'Spanningsprobe',
Current_probe: 'Stroomprobe',
drag_onto_diagram: ': Sleep of klik om in te voegen',
Help: 'Help: open de help-pagine',
Grid: 'Raster: voeg raster in',
Link_tip: 'Link: deel een link naar het circuit',
Cut: 'Knip geselecteerde componenten naar het klembord',
Copy:'Kopieer geselecteerde componenten naar het klembord',
Paste:'Plak klembord in het schema',
Delete:'Verwijder geselecteerde componenten',
Rotate:'Draai de geselecteerde component',
Save_netlist: 'Sla netlijst op',
Open_netlist: 'Open netlijst',
Select_netlist: 'Selecteer netlist',
Perform_DC_Analysis: 'Voer een DC analyse uit',
DC_Analysis: 'DC Analyse',
Perform_AC_Analysis: 'Voer een laag-signaal AC analyse uit',
Perform_Transient_Analysis: 'Voer een Eenmalige Analyse uit',
Transient_Analysis: 'Eenmalige Analyse',
Edit_Properties: 'Pas eigenschappen aan',
Link: 'Link',
Sharable_Link: 'Deelbare link',

points_per_decade: 'Aantal punten/tiental',
Starting_frequency: 'Start frequentie (Hz)',
Ending_frequency: 'Eind frequentie (Hz)',	
source_for_ac: 'Naam van V- of I-bron voor ac',
AC_Analysis_add_a_voltage_probe: 'AC Analyse: voeg een spanningsprobe toe aan het diagram!',
AC_Analysis: 'AC Analyse',
Zero_ac_response: 'ac reactie nihil, -oneindig op DB schaal.',
Near_zero_ac_response: 'Reactie naderend naar nul, verwijder ',
probe: ' probe',

// Alerts and warnings from the circuit simulator
Alert: 'Opgepast',
ckt_alert1: 'Waarschuwing!!! Er is een kortsluiting in het circuit, verwijder alstublieft de oorzaak van de kortsluiting.',
ckt_alert2: 'Waarschuwing!!! De simulator geeft mogelijk onbeduidende of geen meetresultaten bij foutieve circuits.',
ckt_warning1: 'Waarschuwing: twee elementen hebben dezelfde naam ',
ckt_alert3: 'Maak minstens één verbinding met de massa (driehoekig symbool)',
ckt_alert4: 'Newton Methode mislukt, mogelijk is er geen verbinding van de stroombron naar de massa',
ckt_alert5: 'Newton Methode mislukt, de oorzaak is mogelijk het circuit of e simulator.',
ckt_alert6: 'DC mislukt, probeer eenmalige analyse geheel opnieuw.',
ckt_alert7: 'AC analyse verwijst naar onbekende bron ',
ckt_alert8: 'AC analyse mislukt, onbekende bron',	

ckt_error1: 'Rows of M mismatched to b or cols mismatch to x.',
ckt_error2: 'Rij of kolom van A te groot voor B',
ckt_error3: 'Rij of kolom van A te groot voor C',
ckt_error4: 'scalea and scaleb must be scalars or Arrays',
ckt_error5: 'Rijen of kolommen > rijen of kolommen van bestemming',
ckt_error6: 'Rijen of kolommen > kolommen of rijen van bestemming',	    	    

log_Frequency: 'log(Frequentie in Hz)',
degrees: 'graden',
AC_Phase: 'AC Fase',
AC_Magnitude: 'AC Magnitude',

Minimum_number_of_timepoints: 'Minimaal aantal tijdsverdeling',
Stop_time_seconds: 'Stoptijd (second)',
tstop_lbl: 'stoptijd',
Transient_Analysis_add_a_probe: 'Eenmalige analyse: voeg probe toe aan het diagram!',

//Use creating phrasing to get this right: 
// alert('The ' + color + ' probe is connected to node ' + '"' + label + '"' + ' which is not an actual circuit node');
The: 'De ',
probe_is_connected_to_node: ' probe is verbonden aan meetpunt ',
which_is_not_an_actual_circuit_node: ' dat geen meetpunt is van dit circuit',

Voltage: 'Spanning',
Current: 'Stroom',
Time: 'Tijd',
Node_has_two_conflicting_labels: 'Meetpunt heeft confilcterende labels: ',

DC_value: 'DC waarde',

impulse: 'impuls',
Height: 'Hoogte',
Width: 'Breedte (sec)',

step: 'stap',
Initial_value: 'Initiële waarde',
Plateau_value: 'Plateau-waarde',
Delay_until_step: 'Vertraging tot stap (sec)',
Rise_time: 'Stijgtijd (secs)',

square: 'vierkant',
Frequency: 'Frequentie (Hz)',
Duty_cycle: 'Duty cycle (%)',

triangle: 'driehoek',

pwl: 'vermogen',
pwl_repeating: 'vermogen (herhaaldelijk)',
Comma_separated_list: 'Komma-gescheiden lijst met wisselende tijden en waarden',

pulse: 'puls',
Delay_until_pulse: 'Vertraging tot puls (sec)',
Time_for_first_transition: 'Tijd tot eerste overgang (sec)',
Time_for_second_transition: 'Tijd tot tweede overgang (sec)',
Pulse_width: 'Pulsbreedte (sec)',
Period: 'Periode (sec)',

sin: 'sinus',
Offset_value: 'Waarde verschuiving',
Amplitude: 'Amplitude',
Delay_until_sin_starts: 'Vertraging tot start sinus (sec)',
Phase_offset_degrees: 'Faseverschuiving (degrees)',

Circuit_Sandbox_Help: 'CIRCUIT SANDBOX HELP',
name: 'Naam',
value: 'Waarde',
label: 'Label',
r: 'R',
c: 'C',
l: 'L',
color: 'Kleur',
offset: 'Verschuiving',
area: 'Gebied',
type: 'Type',
normal: 'normaal',
ideal: 'ideaal',
WL: 'W/L',
A: 'A',
Plot_color: 'Plot kleur',
Plot_offset: 'Plot offset',
dc: 'dc',
impulse: 'impuls',
step: 'stap',
square: 'vierkant',
triangle: 'driehoek',
pulse: 'puls',

red: 'rood',
green: 'groen',
blue: 'blauw',
cyan: 'cyaan',
magenta: 'magenta',
yellow: 'geel',
orange: 'oranje',
black: 'zwart',
xaxis: 'x-as',

last_line: 'laatste regel, geen komma'
};

var strSHelp = "CIRCUIT SANDBOX HELP\n\n";		//embedded Help 
var strAddC = "Voeg component toe: Klik op component in bibliotheek, dan op het schema om toe te voegen.\n\n";
var strAddW = "Voeg bedrading toe: Bedrading start op connectiepunten (open cirkels). Klik op een connectie om bedrading te beginnen, sleep, en laat los.\n\n";
var strSel  = "Selecteer: Omkader om componenten te selecteren. \n(desktop:) Shift-klik om een component toe te voegen.\n\n";
var strMove = "Verplaats: Klik en sleep naar nieuwe locatie.\n\n";
var strDel  = "Verwijder: Klik om te selecteren, klik dan op het X-icoon of druk BACKSPACE.\n\n";
var strRot  = "Draai/Spiegel: Klik om te selecteren, vervolgens op het draai-icoon of type de letter \"r\" om 90° te draaien. Herhaal om meer te draaien of te spiegelen (8 totaal).\n\n";
var strProp = "Eigenschappen: Dubbelklik op een component om eigenschappen als weerstand en voltage aan te passen.\n\n";
var strNum  = "Nummers mogen ingevoerd met wetenschappelijk notitie (.10^x):\n\
T\t10^12     m\t10^-3    \n\
G\t10^9       u\t10^-6   \n\
M\t10^6       n\t10^-9   \n\
k \t10^3       p\t10^-12 \n\
                    f\t10^-15";
