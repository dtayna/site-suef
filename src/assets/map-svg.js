import * as React from "react";
import styled from 'styled-components';
import './mapa.css';
import '../styles/global.css';
import { Title } from '../components/global-components';
import { AiFillCaretDown } from 'react-icons/ai';

const MapLegendItem = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;
const MapLegendColor = styled.div`
    display block;
    width: 10px;
    height: 10px;
`;
const MapLegendText = styled.p`
    font-style: italic;
    font-size: 15px;
    color: var(--textColor);
`;

const MapLegendContainer = styled.div`
    background-color: white;
    box-shadow: var(--grayBoxShadow);
    border-radius: 5px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
`;

const MapLegendSubContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

const MapSVG = (props) => { 
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];  
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-38.5821 4.8314 3.613599999999998 2.1433" strokeLinecap="round" strokeLinejoin="round" id="mapa-estado-svg">
        <g id="UF-RN" transform="scale(0.0001,-0.0001)">
            {/*1ª DIREC */}
                {/*Extremoz */}
                <a onClick={() => props.activatePopup("Extremoz", [55, 23, 96, 80, 50, 40, 70, 30, 29])} className="direc-1" type="button">
                    <title>Extremoz - 1ª Direc </title>
                    <path id="2403608" d="M-352036,-57432l114,426l-254,295l-95,590l-577,-122l-762,-1042l478,-95l477,340l619,-392Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Macaíba */}
                <a onClick={() => props.activatePopup("Macaíba", [55, 23, 96, 80, 50, 40, 70, 30, 29])} className="direc-1" type="button" >
                    <title>Macaíba - 1ª Direc</title>
                    <path id="2407104" d="M-352824,-58498l4,203l-266,-68l-1234,-89l-396,104l-174,36l-400,-506l-432,-505l348,-634l-203,-511l110,-72l1733,666l773,292l137,1084Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Natal */}
                <a onClick={() => props.activatePopup("Natal", [10,10,10,10,10,5,5,5,5])} className="direc-1" type="button">
                    <title>Natal (SEDE) - 1ª Direc</title>
                    <path id="2408102" d="M-352036,-57432l-619,392l-258,-285l47,-310l343,-347l-297,-313l-4,-203l645,-188l417,-312l221,20l-252,333l0,656l-243,557Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São G. do Amarante */}
                <a onClick={() => props.activatePopup("São G. do Amarante", [55, 23, 96, 80, 50, 40, 70, 30, 29])} className="direc-1" type="button" >
                    <title>São G. do Amarante - 1ª Direc </title>
                    <path id="2412005" d="M-352820,-58295l297,313l-343,347l-47,310l258,285l-477,-340l-478,95l-859,-49l-247,-1014l396,-104l1234,89l266,68Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*1ª DIREC */}
            {/*2ª DIREC */}
                {/*Arês */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalArez">
                    <title>Arês - 2ª Direc </title>
                    <path id="2401206" d="M-351108,-61869l-462,387l-185,-167l-448,-59l-778,95l124,-440l546,-370l287,196l525,46l391,312Z" strokeWidth="200" stroke="white"></path>
                </a>
                {/*Baia Formosa */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalBaiaFormosa">
                    <title>Baia Formosa - 2ª Direc</title>
                    <path id="2401404" d="M-349685,-64872l-64,676l-172,487l-275,52l-123,549l-358,-356l49,-156l-645,-500l172,-341l-24,-590l170,74l378,-301l292,223l600,183Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Canguaretama */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalCanguaretama">
                    <title>Canguaretama - 2ª Direc</title>
                    <path id="2402204" d="M-350443,-62838l-112,-432l-619,-68l6,520l-285,-172l-221,-230l0,-320l-687,47l-361,-209l10,-20l490,-491l371,58l389,-1173l4,-200l333,477l24,590l-172,341l645,500l-49,156l358,356l-15,244l-109,26Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Goianinha */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalGoianinha">
                    <title>Goianinha - 2ª Direc</title>
                    <path id="2404200" d="M-351499,-62181l-525,-46l-287,-196l-546,370l190,-1190l-55,-459l361,209l687,-47l0,320l221,230l-101,313l55,496Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Monte Alegre */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalMonteAlegre">
                    <title>Monte Alegre - 2ª Direc</title>
                    <path id="2407807" d="M-353651,-60555l-643,50l-272,-280l-560,274l-328,-45l137,-360l661,-300l219,-190l302,82l321,-261l290,-235l263,412l274,687l-246,239l-418,-73Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Nísia Floresta */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalNisiaFloresta">
                    <title>Nísia Floresta - 2ª Direc</title>
                    <path id="2408201" d="M-351210,-59817l-617,439l-293,30l-342,-194l171,-372l-84,-769l94,-51l78,-974l448,59l185,167l592,84l15,825l-247,756Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Parnamirim */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalParnamirim">
                    <title>Parnamirim (SEDE) - 2ª Direc</title>
                    <path id="2403251" d="M-351541,-58978l-221,-20l-417,312l-645,188l-137,-1084l499,40l342,194l293,-30l617,-439l-320,347l-11,492Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São José de Mipibu */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalSJoseMipibu">
                    <title>São José de Mipibu - 2ª Direc</title>
                    <path id="2412203" d="M-352203,-61708l-78,974l-94,51l84,769l-171,372l-499,-40l-773,-292l-87,-344l170,-337l418,73l246,-239l-274,-687l-263,-412l130,-34l204,-56l333,-143l-124,440l778,-95Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Sen. Georgino Avelino */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalSAvelino">
                    <title>Sen. Georgino Avelino - 2ª Direc</title>
                    <path id="2413201" d="M-350939,-61834l-39,436l-592,-84l462,-387l169,35Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Tibau do Sul */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalTibauSul">
                    <title>Tibau do Sul - 2ª Direc </title>
                    <path id="2414209" d="M-350334,-62864l-26,510l-262,96l-317,424l-169,-35l-391,-312l-55,-496l101,-313l285,172l412,159l313,-179l109,-26Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Vera Cruz */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalVeraCruz">
                    <title>Vera Cruz - 2ª Direc</title>
                    <path id="2414803" d="M-353651,-60555l-170,337l87,344l-1733,-666l13,-16l328,45l560,-274l272,280l643,-50Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Vila Flor */}
                <a className="direc-2" type="button" data-bs-toggle="modal" data-bs-target="#ModalVilaFlor">
                    <title>Vila Flor - 2ª Direc</title>
                    <path id="2415008" d="M-350443,-62838l-313,179l-412,-159l-6,-520l619,68l112,432Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*2ª DIREC */}
            {/*3ª DIREC */}
                {/*Boa Saúde */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalBoaSaude">
                    <title>Boa Saúde - 3ª Direc</title>
                    <path id="2405306" d="M-355467,-60540l-110,72l-131,-327l-221,-160l-487,-405l-122,-412l-676,41l-192,-96l773,-152l33,-243l382,170l541,-5l173,58l187,1083l-137,360l-13,16Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Brejinho */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalBrejinho">
                    <title>Brejinho - 3ª Direc</title>
                    <path id="2401800" d="M-353499,-62249l105,395l-130,34l-290,235l-216,-518l-334,-431l155,-198l195,278l433,-44l82,249Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Espírito Santo */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalEspiritoSanto">
                    <title>Espirito Santo - 3ª Direc</title>
                    <path id="2403509" d="M-352722,-63702l55,459l-190,1190l-333,143l-42,-801l-190,-442l33,-658l293,-220l384,309l-10,20Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Jundiá */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalJundia">
                    <title>Jundiá - 3ª Direc</title>
                    <path id="2406155" d="M-353422,-63153l190,442l42,801l-204,56l-105,-395l-108,-830l185,-74Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Lagoa D'anta */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalLagoaDanta">
                    <title>Lagoa D'anta - 3ª Direc</title>
                    <path id="2406205" d="M-356432,-63258l-282,112l-116,-435l114,-571l1129,-157l145,135l-108,264l-420,52l-462,600Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Lagoa de Pedras */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalLagoaPedras">
                    <title>Lagoa de Pedras - 3ª Direc</title>
                    <path id="2406304" d="M-353814,-61585l-321,261l-302,-82l-18,-135l-815,-472l-234,14l-173,-58l992,-250l321,-227l334,431l216,518Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Lagoa Salgada */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalLagoaSalgada">
                    <title>Lagoa Salgada - 3ª Direc</title>
                    <path id="2406601" d="M-354437,-61406l-219,190l-661,300l-187,-1083l234,-14l815,472l18,135Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Montanhas */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalMontanhas">
                    <title>Montanhas - 3ª Direc</title>
                    <path id="2407708" d="M-352244,-65216l-510,407l-38,324l-352,-11l-269,-890l667,-53l502,223Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Monte das Gameleiras */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalMonteGameleiras">
                    <title>Monte das Gameleiras - 3ª Direc</title>
                    <path id="2407906" d="M-357733,-64828l86,642l-787,408l-112,-567l747,-488l66,5Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Nova Cruz */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalNovaCruz">
                    <title>Nova Cruz (SEDE) - 3ª Direc </title>
                    <path id="2408300" d="M-353096,-64031l-633,-24l-363,240l-379,-243l-705,-5l-266,-111l-145,-135l-227,-532l166,-77l524,150l703,-98l343,-30l433,-224l232,-266l269,890l48,465Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Passa e Fica */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalPassaFica">
                    <title>Passa e Fica - 3ª Direc</title>
                    <path id="2409100" d="M-355587,-64309l-1129,157l80,-316l268,-76l327,-48l227,-249l227,532Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Passagem */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalPassagem">
                    <title>Passagem - 3ª Direc</title>
                    <path id="2409209" d="M-353885,-63228l304,730l-433,44l-195,-278l-45,-462l369,-34Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Pedro Velho */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalPedroVelho">
                    <title>Pedro Velho - 3ª Direc</title>
                    <path id="2409803" d="M-351458,-65528l-4,200l-389,1173l-371,-58l-490,491l-384,-309l-48,-465l352,11l38,-324l510,-407l304,-287l482,-25Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Santo Antônio */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalSantoAntonio">
                    <title>Santo Antônio - 3ª Direc</title>
                    <path id="2411502" d="M-353885,-63228l-369,34l45,462l-155,198l-321,227l-6,-429l-340,-241l-503,130l-898,-411l462,-600l420,-52l108,-264l266,111l705,5l379,243l207,587Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São José do Campestre */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalSJoseCampestre">
                    <title>São José do Campestre - 3ª Direc</title>
                    <path id="2412302" d="M-357406,-61827l-228,-189l-407,-1174l-458,-432l-206,-6l271,-150l787,-408l817,605l116,435l282,-112l-232,868l64,168l-33,243l-773,152Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Serra de São Bento */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalSerraBento">
                    <title>Serra de São Bento - 3ª Direc</title>
                    <path id="2413300" d="M-356636,-64468l-80,316l-114,571l-817,-605l-86,-642l661,133l436,227Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Serrinha */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalSerrinha">
                    <title>Serrinha - 3ª Direc</title>
                    <path id="2413508" d="M-355677,-62057l-541,5l-382,-170l-64,-168l232,-868l898,411l503,-130l340,241l6,429l-992,250Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Várzea */}
                <a className="direc-3" type="button" data-bs-toggle="modal" data-bs-target="#ModalVarzea">
                    <title>Várzea - 3ª Direc</title>
                    <path id="2414704" d="M-353422,-63153l-185,74l108,830l-82,-249l-304,-730l-207,-587l363,-240l633,24l-293,220l-33,658Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*3ª DIREC */}
            {/*4ª DIREC */}
                {/*Barcelona */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalBarcelona">
                    <title>Barcelona - 4ª Direc </title>
                    <path id="2401503" d="M-358511,-59133l-1156,120l40,-625l-141,-506l-550,-550l1070,588l900,635l-150,317l-13,21Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Bom Jesus */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalBomJesus">
                    <title>Bom Jesus - 4ª Direc </title>
                    <path id="2401701" d="M-355577,-60468l203,511l-348,634l-780,-441l27,-396l767,-635l131,327Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Caiçara do Rio do Vento */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalCaicaraRioVento">
                    <title>Caiçara do Rio do Vento - 4ª Direc </title>
                    <path id="2401909" d="M-359255,-58003l15,363l-156,310l54,181l-898,169l-385,427l-531,-1539l31,-330l471,-73l515,143l328,315l556,34Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Ielmo Marinho */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalIelmoMarinho">
                    <title>Ielmo Marinho - 4ª Direc </title>
                    <path id="2404606" d="M-354469,-57334l-113,156l-937,145l-58,-178l-741,67h-3l-242,-36l175,-720l443,-775l655,-143l400,506l174,-36l247,1014Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Lagoa de Velhos */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalLagoaVelhos">
                    <title>Lagoa de Velhos - 4ª Direc </title>
                    <path id="2406403" d="M-358225,-60732l238,306l204,267l-565,688l-900,-635l1023,-626Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Riachuelo */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalRiachuelo">
                    <title>Riachuelo - 4ª Direc</title>
                    <path id="2410900" d="M-357771,-57164l-1625,-166l156,-310l-15,-363l744,-1130l13,-21l171,66l359,555l172,381l25,988Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Ruy Barbosa */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalRuyBarbosa">
                    <title>Ruy Barbosa - 4ª Direc</title>
                    <path id="2411106" d="M-359255,-58003l-556,-34l-328,-315l472,-661l1156,-120l-744,1130Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Santa Maria */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalSantaMaria">
                    <title>Santa Maria - 4ª Direc</title>
                    <path id="2409332" d="M-356388,-57900l-175,720l-1208,16l-25,-988l-172,-381l547,-190l589,33l153,747l291,43Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Paulo do Potengi */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalSPauloPotengi">
                    <title>São Paulo do Potengi (SEDE) - 4ª Direc</title>
                    <path id="2412609" d="M-356832,-58690l-589,-33l-547,190l-359,-555l-171,-66l150,-317l565,-688l1099,320l-191,648l43,501Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Pedro */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalSaoPedro">
                    <title> São Pedro - 4ª Direc</title>
                    <path id="2412708" d="M-356388,-57900l-291,-43l-153,-747l-43,-501l191,-648l182,75l780,441l432,505l-655,143l-443,775Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Tomé */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalSaoTome">
                    <title>São Tomé - 4ª Direc</title>
                    <path id="2412906" d="M-360139,-58352l-515,-143l-471,73l-236,-217l-230,136l-538,-234l-113,-263l-572,-1440l-143,-782l389,-358l306,-61l10,207l1041,545l407,-131l486,326l550,550l141,506l-40,625l-472,661Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Sen. Elói de Souza */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalSEloiSouza">
                    <title>Sen. Elói de Souza - 4ª Direc</title>
                    <path id="2413102" d="M-355708,-60795l-767,635l-27,396l-182,-75l-1099,-320l-204,-267l170,19l600,-337l353,13l935,-224l221,160Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Serra Caiada */}
                <a className="direc-4" type="button" data-bs-toggle="modal" data-bs-target="#ModalSerraCaiada">
                    <title>Serra Caiada - 4ª Direc</title>
                    <path id="2410306" d="M-355929,-60955l-935,224l-353,-13l-600,337l-170,-19l-238,-306l-7,-12l24,-550l126,-103l759,-28l109,-306l676,-41l122,412l487,405Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*4ª DIREC */}
            {/*5ª DIREC */}
                {/*Ceará-Mirim */}
                <a className="direc-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalCearaMirim">
                    <title>Ceará-Mirim (SEDE)</title>
                    <path id="2402600" d="M-352558,-55169l-417,298l-340,-16l-259,186l-611,124l-833,-346l-196,-854l93,-724l-398,-532l937,-145l113,-156l859,49l762,1042l577,122l-12,370l-275,582Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Maxaranguape */}
                <a className="direc-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalMaxaranguape">
                    <title>Maxaranguape</title>
                    <path id="2407500" d="M-352558,-55169l-49,363l-273,200l-50,278l-330,515l-755,-559l-801,-162l-202,-389l833,346l611,-124l259,-186l340,16l417,-298Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Pureza */}
                <a className="direc-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalPureza">
                    <title>Pureza</title>
                    <path id="2410405" d="M-354185,-53328l-393,89l-766,-149l-515,287l-558,-244l-772,-547l-455,-624l193,-67l638,-57l557,-283l604,-14l276,-188l358,202l202,389l631,1206Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Rio de Fogo */}
                <a className="direc-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalRioFogo">
                    <title>Rio de Fogo</title>
                    <path id="2408953" d="M-353824,-52700l-361,-628l-631,-1206l801,162l755,559l-289,265l-275,848Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Miguel do Gostoso */}
                <a className="direc-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalSMiguelGostoso">
                    <title>São Miguel do Gostoso</title>
                    <path id="2412559" d="M-356171,-51140l-219,-55l-1519,421l-410,-1326l-83,-246l83,-715l700,125l565,-5l225,167l533,783l125,851Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Taipú */}
                <a className="direc-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalTaipu">
                    <title>Taipú</title>
                    <path id="2413904" d="M-355018,-54923l-358,-202l-276,188l-604,14l-426,-40l97,-902l170,-429l97,-850l741,-67l58,178l398,532l-93,724l196,854Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Touros */}
                <a className="direc-5" type="button" data-bs-toggle="modal" data-bs-target="#ModalTouros">
                    <title>Touros</title>
                    <path id="2414407" d="M-353824,-52700l-343,490l-422,240l-306,400l-825,227l-451,203l-125,-851l-533,-783l-225,-167l-565,5l-700,-125l177,-1587l498,132l455,624l772,547l558,244l515,-287l766,149l393,-89l361,628Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*5ª DIREC */}
            {/*6ª DIREC */}
                {/*Alto Rodrigues */}
                <a className="direc-6" type="button" data-bs-toggle="modal" data-bs-target="#ModalAltoRodrigues">
                    <title>Alto Rodrigues</title>
                    <path id="2400703" d="M-365374,-54128l-180,179l-1090,227l-902,995l-563,-718l-271,-477l3006,-206Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Galinhos */}
                <a className="direc-6" type="button" data-bs-toggle="modal" data-bs-target="#ModalGalinhos">
                    <title>Galinhos</title>
                    <path id="2404101" d="M-360995,-50772l-610,-193l-820,5l-476,83l-182,-144l201,-224l119,-827l5,-823l1241,323l522,1800Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Guamaré */}
                <a className="direc-6" type="button" data-bs-toggle="modal" data-bs-target="#ModalGuamare">
                    <title>Guamaré</title>
                    <path id="2404507" d="M-363083,-51021l-233,151l-752,63l-238,-524l624,-1177l924,-387l-5,823l-119,827l-201,224Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Macau */}
                <a className="direc-6" type="button" data-bs-toggle="modal" data-bs-target="#ModalMacau">
                    <title>Macau (SEDE)</title>
                    <path id="2407203" d="M-364068,-50807l-424,143l-586,41l-345,-262l-687,99l-24,-157l-1022,134l-287,-86l227,-490l-75,-365l1648,-432l495,-837l-8,-1003l757,323l586,550l131,641l-624,1177l238,524Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Pendencias */}
                <a className="direc-6" type="button" data-bs-toggle="modal" data-bs-target="#ModalPendencias">
                    <title>Pendencias</title>
                    <path id="2409902" d="M-365156,-54022l8,1003l-495,837l-1648,432l138,-395l-104,-475l-289,-107l902,-995l1090,-227l180,-179l218,106Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Porto do Mangue */}
                <a className="direc-6" type="button" data-bs-toggle="modal" data-bs-target="#ModalPortoMangue">
                    <title>Porto do Mangue</title>
                    <path id="2410256" d="M-368557,-49723l-526,-175l-4,-911l-439,-3l-225,-495l450,-3l274,-187l1057,-249l484,226l195,-230l75,365l-227,490l287,86l-966,548l-435,538Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*6ª DIREC */}
            {/*7ª DIREC */}
                {/*Campo Redondo */}
                <a className="direc-7" type="button" data-bs-toggle="modal" data-bs-target="#ModalCampoRedondo">
                    <title>Campo Redondo</title>
                    <path id="2402105" d="M-362568,-61580l-15,-852l-367,-489l159,-255l975,197l278,-19l200,892l-237,446l-687,19l-306,61Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Cel. Ezequiel */}
                <a className="direc-7" type="button" data-bs-toggle="modal" data-bs-target="#ModalEzequiel">
                    <title>Cel. Ezequiel</title>
                    <path id="2402808" d="M-361538,-62998l-278,19l-975,-197l-172,-528l751,-324l1247,-175l4,1l-433,904l-144,300Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Jaçanã */}
                <a className="direc-7" type="button" data-bs-toggle="modal" data-bs-target="#ModalJacana">
                    <title>Jaçanã</title>
                    <path id="2405009" d="M-360965,-64203l-1247,175l-751,324l47,-256l404,-84l247,-296l520,32l780,105Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Japí */}
                <a className="direc-7" type="button" data-bs-toggle="modal" data-bs-target="#ModalJapi">
                    <title>Japí</title>
                    <path id="2405405" d="M-358705,-63628l-367,102l-578,-352l-5,-832l3,-134l210,-86l738,44l905,53l-747,488l112,567l-271,150Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Lajes Pintadas */}
                <a className="direc-7" type="button" data-bs-toggle="modal" data-bs-target="#ModalLajesPintadas">
                    <title>Lajes Pintadas</title>
                    <path id="2406809" d="M-360804,-61020l-407,131l-1041,-545l-10,-207l687,-19l237,-446l559,145l-25,941Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Santa Cruz */}
                <a className="direc-7" type="button" data-bs-toggle="modal" data-bs-target="#ModalSantaCruz">
                    <title>Santa Cruz (SEDE)</title>
                    <path id="2411205" d="M-359182,-61628l-487,-90l-201,289l5,446l-453,289l-486,-326l25,-941l-559,-145l-200,-892l144,-300l687,274l369,31l683,-1717l5,832l578,352l367,-102l-477,2000Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Bento do Trairí */}
                <a className="direc-7" type="button" data-bs-toggle="modal" data-bs-target="#ModalSBentoTrairi">
                    <title>São Bento do Trairí</title>
                    <path id="2411700" d="M-359655,-64710l-683,1717l-369,-31l-687,-274l433,-904l193,146l715,-755l401,-33l-3,134Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Sítio Novo */}
                <a className="direc-7" type="button" data-bs-toggle="modal" data-bs-target="#ModalSitioNovo">
                    <title>Sítio Novo</title>
                    <path id="2413706" d="M-358225,-60732l-1023,626l-1070,-588l453,-289l-5,-446l201,-289l487,90l950,884l7,12Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Tangará */}
                <a className="direc-7" type="button" data-bs-toggle="modal" data-bs-target="#ModalTangara">
                    <title>Tangará</title>
                    <path id="2414001" d="M-357214,-61731l-109,306l-759,28l-126,103l-24,550l-950,-884l477,-2000l206,6l458,432l407,1174l228,189l192,96Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*7ª DIREC */}
            {/*8ª DIREC */}
                {/*Afonso Bezerra */}
                <a className="direc-8" type="button" data-bs-toggle="modal" data-bs-target="#ModalAfonsoBezerra">
                    <title>Afonso Bezerra</title>
                    <path id="2400307" d="M-364399,-53699l-757,-323l-218,-106l-3006,206l-4,-116l-220,-385l1607,-215l7,-623l1186,-27l77,-571l1028,-125l300,2285Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Angicos */}
                <a className="direc-8" type="button" data-bs-toggle="modal" data-bs-target="#ModalAngicos">
                    <title>Angicos (SEDE)</title>
                    <path id="2400802" d="M-364699,-55984l-1028,125l-77,571l-1186,27l-263,-477l-459,-321l202,-409l192,-375l291,-171l280,-47l171,-364l275,-162l622,11l441,580l796,10l823,-93l362,-136l522,122l113,294l-448,296l-1629,519Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Bodó */}
                <a className="direc-8" type="button" data-bs-toggle="modal" data-bs-target="#ModalBodo">
                    <title>Bodó</title>
                    <path id="2401651" d="M-363340,-58898l-544,379l-264,-65l-207,-525l-395,-157l-654,-631l-70,-666l256,96l776,53l336,202l475,523l-89,733l380,58Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Fernando Pedroza */}
                <a className="direc-8" type="button" data-bs-toggle="modal" data-bs-target="#ModalFernandoPedroza">
                    <title>Fernando Pedroza</title>
                    <path id="2403756" d="M-362735,-57093l-522,-122l-362,136l-823,93l-796,-10l-441,-580l175,-118l412,135l1200,-395l328,-536l716,-103l113,1500Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Lajes */}
                <a className="direc-8" type="button" data-bs-toggle="modal" data-bs-target="#ModalLajes">
                    <title>Lajes</title>
                    <path id="2406700" d="M-360625,-56553l-807,638l-5,246l-283,222l311,445l124,434l-314,227l-633,2l435,-436l-825,-2024l-113,-294l-113,-1500l268,-55l338,-352l113,263l538,234l230,-136l236,217l-31,330l531,1539Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Pedro Avelino */}
                <a className="direc-8" type="button" data-bs-toggle="modal" data-bs-target="#ModalPedroAvelino">
                    <title>Pedro Avelino</title>
                    <path id="2409704" d="M-362622,-56799l825,2024l-435,436l-526,1444l-924,387l-131,-641l-586,-550l-300,-2285l1629,-519l448,-296Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Santana do Matos */}
                <a className="direc-8" type="button" data-bs-toggle="modal" data-bs-target="#ModalSantanaMatos">
                    <title>Santana do Matos</title>
                    <path id="2411403" d="M-365679,-57576l-622,-11l-275,162l-171,364l-280,47l-522,-572l-348,34l139,-467l22,-591l-445,-521l-756,-619l350,-96l33,-597l429,-89l816,-34l110,-387l666,-165l146,228l913,327l70,666l654,631l395,157l207,525l264,65l544,-379l133,242l359,63l-716,103l-328,536l-1200,395l-412,-135l-175,118Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*8ª DIREC */}
            {/*9ª DIREC */}
                {/*Acari */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalAcari">
                    <title>Acari</title>
                    <path id="2400109" d="M-366046,-62904l-274,218l-780,-95l-333,-294l-109,-130l119,-724l-189,-856l-131,55l132,-427l576,-225l238,-411l680,807l304,243l531,-50l-28,272l266,656l-465,246l-141,496l-396,219Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Carnaúba dos Dantas */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalCarnaubaDantas">
                    <title>Carnaúba dos Dantas</title>
                    <path id="2402402" d="M-365282,-64793l-531,50l-304,-243l-680,-807l433,-131l489,76l668,-258l69,162l756,-349l-40,646l-393,441l-443,194l-24,219Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Cerro Corá */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalCerroCora">
                    <title>Cerro Corá</title>
                    <path id="2402709" d="M-362242,-59000l-338,352l-268,55l-359,-63l-133,-242l-380,-58l89,-733l-475,-523l-336,-202l325,-628l683,63l477,-243l143,782l572,1440Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Cruzeta */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalCruzeta">
                    <title>Cruzeta</title>
                    <path id="2403004" d="M-367542,-63205l-187,221l-415,-53l-233,339l-576,304l-284,-550l629,-944l-133,-299l539,-201l459,-342l131,-55l189,856l-119,724Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Currais Novos */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalCurraisNovos">
                    <title>Currais Novos (SEDE)</title>
                    <path id="2403103" d="M-362957,-61222l-477,243l-683,-63l-482,-111l-321,-213l-172,137l-415,-183l-553,167l-163,-73l34,-606l273,-553l-130,-427l396,-219l141,-496l465,-246l46,283l672,-49l380,691l506,-85l490,104l367,489l15,852l-389,358Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Equador */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalEquador">
                    <title>Equador</title>
                    <path id="2403400" d="M-365602,-68408l-147,346l-366,64l-228,-179l-419,5l-165,-159l-333,165l-42,-198l-298,-781l-65,-214l291,-369l281,-19l221,487l323,-22l513,-23l357,557l77,340Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Florânia */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalFlorania">
                    <title>Florânia</title>
                    <path id="2403806" d="M-367199,-60953l-110,387l-816,34l-429,89l-439,-416l-347,-31l95,-430l303,-133l20,-313l-651,-142l620,-486l576,-304l233,-339l415,53l187,-221l109,130l396,867l-817,241l557,469l98,545Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Lagoa Nova */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalLagoaNova">
                    <title>Lagoa Nova</title>
                    <path id="2406502" d="M-364117,-61042l-325,628l-776,-53l-256,-96l-913,-327l164,-428l163,73l553,-167l415,183l172,-137l321,213l482,111Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Parelhas */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalParelhas">
                    <title>Parelhas</title>
                    <path id="2408904" d="M-366797,-65793l106,-310l-532,-364l157,-332l-55,-733l-192,-389l53,-245l333,-165l165,159l419,-5l228,179l366,-64l147,-346l165,-13l337,242l52,640l-287,204l-252,258l380,971l-668,258l-489,-76l-433,131Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Santana do Seridó */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalSantanaSerido">
                    <title>Santana do Seridó</title>
                    <path id="2411429" d="M-367260,-68166l-53,245l192,389l55,733l-157,332l-425,-225l-519,-104l-259,50l76,-565l623,-560l32,-516l393,23l42,198Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Vicente */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalSaoVicente">
                    <title>São Vicente</title>
                    <path id="2413003" d="M-366046,-62904l130,427l-273,553l-34,606l-164,428l-146,-228l-473,-335l-129,-599l98,-156l-396,-867l333,294l780,95l274,-218Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Ten. Laurentino Cruz */}
                <a className="direc-9" type="button" data-bs-toggle="modal" data-bs-target="#ModalTLaurentino">
                    <title>Ten. Laurentino Cruz</title>
                    <path id="2414159" d="M-366533,-61118l-666,165l-98,-545l-557,-469l817,-241l-98,156l129,599l473,335Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*9ª DIREC */}
            {/*10ª DIREC */}
                {/*Caicó */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalCaico">
                    <title>Caicó (SEDE)</title>
                    <path id="2402006" d="M-369573,-61908l-458,-309l-426,-22l-352,-667l-7,-636l88,-383l-292,-251l-865,-214l-68,-78l-216,-1126l-139,-101l124,-502l388,59l701,-430l66,-279l676,-495l317,246l238,680l-8,245l437,394l-145,554l-63,306l836,730l133,299l-629,944l284,550l-620,486Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Ipueira */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalIpueira">
                    <title>Ipueira</title>
                    <path id="2404804" d="M-370754,-67541l-202,296l-621,-151l-466,-221l-596,295l-55,-298l143,-491l205,-135l419,-15l405,277l245,328l523,115Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Jardim de Piranhas */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalJardimPiranhas">
                    <title>Jardim de Piranhas</title>
                    <path id="2405603" d="M-371407,-61810l-162,285l-447,-532l-320,-74l-370,-386l-25,-283l-420,18l-189,-301l-294,-139l-254,-688l76,-461l627,-176l576,504l414,362l29,1226l236,332l523,313Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Jardim do Seridó */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalJardimSerido">
                    <title>Jardim do Seridó</title>
                    <path id="2405702" d="M-366797,-65793l-238,411l-576,225l-750,-229l-692,213l-461,-50l145,-554l1202,-1019l519,104l425,225l532,364l-106,310Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Jucurutu */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalJucurutu">
                    <title>Jucurutu</title>
                    <path id="2406106" d="M-368937,-59750l-429,66l-365,556l351,421l-394,571l-323,-235l-259,-540l-313,-935l-553,297l-323,-377l-78,-286l-116,-268l-12,-942l182,-103l162,-285l436,-502l514,73l426,22l458,309l651,142l-20,313l-303,133l-95,430l347,31l439,416l-33,597l-350,96Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Ouro Branco */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalOuroBranco">
                    <title>Ouro Branco</title>
                    <path id="2408508" d="M-368167,-66796l-1202,1019l-437,-394l8,-245l-238,-680l260,-123l185,-614l489,264l752,258l-76,565l259,-50Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Fernando */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalSaoFernando">
                    <title>São Fernando</title>
                    <path id="2411809" d="M-370457,-62239l-514,-73l-436,502l-523,-313l-236,-332l-29,-1226l-414,-362l724,-347l865,214l292,251l-88,383l7,636l352,667Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São João do Sabugi */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalSJoaoSabugi">
                    <title>São João do Sabugi</title>
                    <path id="2412104" d="M-370353,-67342l-676,495l-66,279l-701,430l-388,-59l-330,-272l-503,-53l-126,-368l504,-432l596,-295l466,221l621,151l202,-296l401,199Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São José do Seridó */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalSJoseSerido">
                    <title>São José do Seridó</title>
                    <path id="2412401" d="M-367743,-64730l-459,342l-539,201l-836,-730l63,-306l461,50l692,-213l750,229l-132,427Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Serra Negra do Norte */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalSerraNegraNorte">
                    <title>Serra Negra do Norte</title>
                    <path id="2413409" d="M-372308,-65695l-294,460l-583,688l-627,176l-146,-730l-254,-232l-435,6l-157,-725l142,-548l-185,-500l774,128l646,-40l284,122l126,368l503,53l330,272l-124,502Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Timbaúba dos Batistas */}
                <a className="direc-10" type="button" data-bs-toggle="modal" data-bs-target="#ModalTimbaubaBatistas">
                    <title>Timbaúba dos Batistas</title>
                    <path id="2414308" d="M-371885,-64390l-724,347l-576,-504l583,-688l294,-460l139,101l216,1126l68,78Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*10ª DIREC */}
            {/*11ª DIREC */}
                {/*Assú */}
                <a className="direc-11" type="button" data-bs-toggle="modal" data-bs-target="#ModalAssu">
                    <title>Assú (SEDE)</title>
                    <path id="2400208" d="M-368975,-56035l150,303l-213,436l343,515l91,358l220,385l-180,29l-721,472l-1009,280l-218,316l-749,7l-467,-1971l682,-1657l500,-896l605,-259l-417,-1193l2,-1l259,540l323,235l-27,283l186,328l679,417l102,702l-141,371Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Campo Grande */}
                <a className="direc-11" type="button" data-bs-toggle="modal" data-bs-target="#ModalCampoGrande">
                    <title>Campo Grande</title>
                    <path id="2401305" d="M-372206,-57175l-925,76l-586,-124l-958,-300l200,-1504l109,-827l614,248l-21,-820l-15,-425l1223,566l826,-195l116,268l-982,1126l655,849l-304,339l48,723Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Carnaubais */}
                <a className="direc-11" type="button" data-bs-toggle="modal" data-bs-target="#ModalCarnaubais">
                    <title>Carnaubais</title>
                    <path id="2402501" d="M-367291,-51750l-195,230l-484,-226l-1057,249l-274,187l20,-1628l-1231,-3l218,-316l1009,-280l721,-472l180,-29l4,116l271,477l563,718l289,107l104,475l-138,395Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Ipanguaçu */}
                <a className="direc-11" type="button" data-bs-toggle="modal" data-bs-target="#ModalIpanguassu">
                    <title>Ipanguaçu</title>
                    <path id="2404705" d="M-366990,-55261l-7,623l-1607,215l-91,-358l-343,-515l213,-436l-150,-303l816,-391l649,-42l-202,409l459,321l263,477Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Itajá */}
                <a className="direc-11" type="button" data-bs-toggle="modal" data-bs-target="#ModalItaja">
                    <title>Itajá</title>
                    <path id="2404853" d="M-367027,-57014l-291,171l-192,375l-649,42l-816,391l141,-371l-102,-702l444,-133l595,-311l348,-34l522,572Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Paraú */}
                <a className="direc-11" type="button" data-bs-toggle="modal" data-bs-target="#ModalParau">
                    <title>Paraú</title>
                    <path id="2408706" d="M-370358,-58910l417,1193l-605,259l-500,896l-722,-675l-438,62l-48,-723l304,-339l463,-426l1129,-247Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Rafael */}
                <a className="direc-11" type="button" data-bs-toggle="modal" data-bs-target="#ModalSaoRafael">
                    <title>São Rafael</title>
                    <path id="2412807" d="M-367897,-57552l-595,311l-444,133l-679,-417l-186,-328l27,-283l394,-571l-351,-421l365,-556l429,-66l756,619l445,521l-22,591l-139,467Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Triunfo Potiguar */}
                <a className="direc-11" type="button" data-bs-toggle="modal" data-bs-target="#ModalTriunfoPotiguar">
                    <title>Triunfo Potiguar</title>
                    <path id="2414456" d="M-370358,-58910l-1129,247l-463,426l-655,-849l982,-1126l78,286l323,377l553,-297l313,935l-2,1Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*11ª DIREC */}
            {/*12ª DIREC */}
                {/*Areia Branca */}
                <a className="direc-12" type="button" data-bs-toggle="modal" data-bs-target="#ModalAreiaBranca">
                    <title>Areia Branca</title>
                    <path id="2401107" d="M-368557,-49723l-228,217l-403,41l-412,279l-773,-313l-666,275l-347,-255l20,-572l-163,-488l155,-515l260,-193l-3,279l609,2l394,747h456l-2,360l577,-39l526,175Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Baraúna */}
                <a className="direc-12" type="button" data-bs-toggle="modal" data-bs-target="#ModalBarauna">
                    <title>Baraúna</title>
                    <path id="2401453" d="M-375831,-52779l945,2610l-98,204l60,720l253,386l-1732,-405l-368,-1259l-480,-183l-83,-300l-316,-390l-232,-796l2051,-587Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Gov. Dix-Sept Rosado */}
                <a className="direc-12" type="button" data-bs-toggle="modal" data-bs-target="#ModalGovRosado">
                    <title>Gov. Dix-Sept Rosado</title>
                    <path id="2404309" d="M-372947,-54779l-74,147l63,718l-1302,802l-1571,333l-2051,587l34,-210l-21,-570l-259,-194l1706,-986l-128,-176l119,-161l787,-431l-145,-796l857,48l511,-201l597,1087l877,3Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Grossos */}
                <a className="direc-12" type="button" data-bs-toggle="modal" data-bs-target="#ModalGrossos">
                    <title>Grossos</title>
                    <path id="2404408" d="M-371386,-49479l-190,25l-634,640l-480,-303l-14,-338l-374,-1l990,-461l321,215l100,-448l301,99l-20,572Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Mossoró */}
                <a className="direc-12" type="button" data-bs-toggle="modal" data-bs-target="#ModalMossoro">
                    <title>Mossoró (SEDE)</title>
                    <path id="2408003" d="M-374464,-48810l-207,-49l-253,-386l-60,-720l98,-204l-945,-2610l1571,-333l1302,-802l-63,-718l74,-147l1219,-126l467,1971l-297,-5l-7,1272l454,1l-3,419l-260,193l-155,515l163,488l-301,-99l-100,448l-321,-215l-990,461l-375,106l-198,276l-622,-41l-191,305Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Serra do Mel */}
                <a className="direc-12" type="button" data-bs-toggle="modal" data-bs-target="#ModalSerraMel">
                    <title>Serra do Mel</title>
                    <path id="2413359" d="M-369301,-51310l-450,3l225,495l439,3l4,911l-577,39l2,-360h-456l-394,-747l-609,-2l3,-279l3,-419l-454,-1l7,-1272l297,5l749,-7l1231,3l-20,1628Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Tibau */}
                <a className="direc-12" type="button" data-bs-toggle="modal" data-bs-target="#ModalTibau">
                    <title>Tibau</title>
                    <path id="2411056" d="M-373078,-49456l374,1l14,338l480,303l-317,500l-1042,-267l-895,-229l191,-305l622,41l198,-276l375,-106Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Upanema */}
                <a className="direc-12" type="button" data-bs-toggle="modal" data-bs-target="#ModalUpanema">
                    <title>Upanema</title>
                    <path id="2414605" d="M-371046,-56562l-682,1657l-1219,126l-877,-3l-597,-1087l-254,-1654l958,300l586,124l925,-76l438,-62l722,675Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*12ª DIREC */}
            {/*13ª DIREC */}
                {/*Apodi */}
                <a className="direc-13" type="button" data-bs-toggle="modal" data-bs-target="#ModalApodi">
                    <title>Apodi (SEDE)</title>
                    <path id="2401008" d="M-376748,-56326l-545,370l-351,130l1094,1498l128,176l-1706,986l-347,-234l-162,-341l32,-326l-207,-295l-210,-645l-325,-46l-159,-313l-394,-192l-467,-837l-461,-329l-69,-424l428,-181l-117,-220l1774,578l251,-503l-238,-69l77,-1244l-409,-248l170,-375l1147,156l475,134l1,1l129,1714l132,192l161,681l168,206Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Caraúbas */}
                <a className="direc-13" type="button" data-bs-toggle="modal" data-bs-target="#ModalCaraubas">
                    <title>Caraúbas</title>
                    <path id="2402303" d="M-374675,-57523l254,1654l-511,201l-857,-48l-959,-610l-168,-206l-161,-681l-132,-192l-129,-1714l852,-294l555,-406l385,230l205,358l410,292l456,-88l-200,1504Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Felipe Guerra */}
                <a className="direc-13" type="button" data-bs-toggle="modal" data-bs-target="#ModalFelipeGuerra">
                    <title>Felipe Guerra</title>
                    <path id="2403707" d="M-375789,-55716l145,796l-787,431l-119,161l-1094,-1498l351,-130l545,-370l959,610Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Itaú */}
                <a className="direc-13" type="button" data-bs-toggle="modal" data-bs-target="#ModalItau">
                    <title>Itaú</title>
                    <path id="2404903" d="M-379131,-59035l409,248l-77,1244l238,69l-251,503l-286,-871l-654,-321l-391,-378l100,-28l533,-66l341,108l38,-508Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Rodolfo Fernandes */}
                <a className="direc-13" type="button" data-bs-toggle="modal" data-bs-target="#ModalRodolfoFernandes">
                    <title>Rodolfo Fernandes</title>
                    <path id="2411007" d="M-381215,-59458l1172,889l-100,28l-443,992l-603,-779l-36,-489l-368,-429l-42,-143l420,-69Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Severino Melo */}
                <a className="direc-13" type="button" data-bs-toggle="modal" data-bs-target="#ModalSeverinoMelo">
                    <title>Severino Melo</title>
                    <path id="2413607" d="M-380143,-58541l391,378l654,321l286,871l-1774,-578l443,-992Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Taboleiro Grande */}
                <a className="direc-13" type="button" data-bs-toggle="modal" data-bs-target="#ModalTaboleiroGrande">
                    <title>Taboleiro Grande</title>
                    <path id="2413805" d="M-380263,-59910l-186,553l356,201l220,301l363,220l-533,66l-1172,-889l70,-133l278,-559l432,68l172,172Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*13ª DIREC */}
            {/*14ª DIREC */}
                {/*Almino Afonso */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalAlminoAfonso">
                    <title>Almino Afonso</title>
                    <path id="2400604" d="M-376876,-61093l-235,-215l-311,91l-352,539l-116,-231l-212,-231l92,-397l32,-636l212,-286l342,569l334,120l214,677Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Antônio Martins */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalAntonioMartins">
                    <title>Antônio Martins</title>
                    <path id="2400901" d="M-378895,-61669l-576,64l-461,-498l-292,8l-193,404l-156,-266l-62,-579l1002,-29l815,-166l317,172l735,100l-212,286l-917,504Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Frutuoso Gomes */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalFrutuosoGomes">
                    <title>Frutuoso Gomes</title>
                    <path id="2404002" d="M-378010,-61537l-630,497l53,-196l-308,-433l917,-504l-32,636Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Janduís */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalJanduis">
                    <title>Janduís</title>
                    <path id="2405207" d="M-374475,-59027l-456,88l-410,-292l-205,-358l-385,-230l357,-341l426,-485l583,-322l792,541l21,820l-614,-248l-109,827Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*João Dias */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalJoaoDias">
                    <title>João Dias</title>
                    <path id="2405900" d="M-378432,-63331l311,404l472,5l-117,463l-735,-100l-317,-172l-263,-121l73,-331l576,-148Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Lucrécia */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalLucrecia">
                    <title>Lucrécia</title>
                    <path id="2406908" d="M-378010,-61537l-92,397l212,231l-568,340l134,-253l-316,-218l630,-497Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Martins */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalMartins">
                    <title>Martins</title>
                    <path id="2407401" d="M-378458,-60569l-514,490l-367,36l-205,-253l-266,-460l399,-236l-60,-613l576,-64l308,433l-53,196l316,218l-134,253Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Messias Targino */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalMessiasTargino">
                    <title>Messias Targino</title>
                    <path id="2407609" d="M-373773,-60426l-792,-541l-583,322l-426,485l-200,-180l555,-1178l630,68l132,328l521,28l148,243l15,425Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Olho d'Água do Borges */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalOlhoBorges">
                    <title>Olho d'Água do Borges</title>
                    <path id="2408409" d="M-376724,-60479l238,1066l-852,294l-1,-1l-397,-497l14,-401l315,-114l190,-279l493,-68Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Patu */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalPatu">
                    <title>Patu</title>
                    <path id="2409308" d="M-375219,-61518l-555,1178l200,180l-357,341l-555,406l-238,-1066l-152,-614l-214,-677l358,-136l570,144l466,208l477,36Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Rafael Godeiro */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalRafaelGodeiro">
                    <title>Rafael Godeiro</title>
                    <path id="2410603" d="M-376724,-60479l-493,68l-190,279l-315,114l-52,-660l352,-539l311,-91l235,215l152,614Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Riacho da Cruz */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalRiachoCruz">
                    <title>Riacho da Cruz</title>
                    <path id="2410702" d="M-379131,-59035l-38,508l-341,-108l-363,-220l-220,-301l-356,-201l186,-553l435,225l616,87l251,188l-170,375Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Serrinha dos Pintos */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalSerrinhaPintos">
                    <title>Serrinha dos Pintos</title>
                    <path id="2413557" d="M-379471,-61605l60,613l-399,236l-278,-208l-350,-296l21,-431l193,-404l292,-8l461,498Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Umarizal */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalUmarizal">
                    <title>Umarizal (SEDE)</title>
                    <path id="2414506" d="M-377722,-60018l-14,401l397,497l-475,-134l-1147,-156l-251,-188l-127,-445l367,-36l514,-490l568,-340l116,231l52,660Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Viçosa */}
                <a className="direc-14" type="button" data-bs-toggle="modal" data-bs-target="#ModalVicosa">
                    <title>Viçosa</title>
                    <path id="2414902" d="M-379212,-59598l-616,-87l284,-611l205,253l127,445Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*14ª DIREC */}
            {/*15ª DIREC */}
                {/*Água Nova */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalAguaNova">
                    <title>Água Nova</title>
                    <path id="2400406" d="M-382776,-61810l-334,46l-465,-250l-4,-162l563,-237l296,187l-56,416Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Alexandria */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalAlexandria">
                    <title>Alexandria</title>
                    <path id="2400505" d="M-378432,-63331l-576,148l-73,331l263,121l-815,166l-206,-541l-472,-106l-254,100l-433,-191l-258,-369l358,-888l189,-79l441,-109l186,426l659,81l229,125l605,372l157,413Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Cel. João Pessoa */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalJoaoPessoa">
                    <title>Cel. João Pessoa</title>
                    <path id="2402907" d="M-383650,-61729l-530,-459l-305,-31l-330,-301l1,-524l238,-253l489,362l294,308l214,451l4,162l-75,285Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Dr. Severiano */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalDSeveriano">
                    <title>Dr. Severiano</title>
                    <path id="2403202" d="M-383396,-60777l-282,-99l-140,341l-230,-38l-612,-641l572,-565l348,107l249,437l95,458Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Encanto */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalEncanto">
                    <title>Encanto</title>
                    <path id="2403301" d="M-382491,-61638l-258,980l-316,-212l-331,93l-95,-458l-159,-494l75,-285l465,250l334,-46l285,172Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Francisco Dantas */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalFranciscoDantas">
                    <title>Francisco Dantas</title>
                    <path id="2403905" d="M-381145,-59591l-299,-132l-399,-457l-51,-283l417,-498l1039,-299l350,296l-246,364l-533,450l-278,559Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*José da Penha */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalJosePenha">
                    <title>José da Penha</title>
                    <path id="2406007" d="M-382476,-62897l-500,116l-358,-335l21,-171l-53,-455l499,-176l340,-266l142,328l132,286l-222,232l-1,441Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Luís Gomes */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalLuisGomes">
                    <title>Luís Gomes</title>
                    <path id="2407005" d="M-383313,-63287l-633,-164l-141,516l-489,-362l-8,-5l-302,-314l52,-279l354,-139l463,-62l292,-465l287,-6l-38,87l110,738l53,455Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Major Sales */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalMajorSales">
                    <title>Major Sales</title>
                    <path id="2407252" d="M-382867,-63918l-499,176l-110,-738l408,219l201,343Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Marcelino Vieira */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalMarcelinoVieira">
                    <title>Marcelino Vieira</title>
                    <path id="2407302" d="M-381256,-63672l258,369l363,767l62,579l-719,199l-404,-183l-243,-265l-552,-287l15,-404l1,-441l222,-232l-132,-286l738,-12l391,196Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Paraná */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalParana">
                    <title>Paraná</title>
                    <path id="2408607" d="M-382290,-64833l-237,649l-340,266l-201,-343l-408,-219l38,-87l551,-489l322,224l275,-1Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Pau dos Ferros */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalPauFerros">
                    <title>Pau dos Ferros (SEDE)</title>
                    <path id="2409407" d="M-381894,-60463l-628,361l-4,-329l-223,-227l258,-980l419,82l337,-144l39,-241l404,183l719,-199l156,266l-21,431l-1039,299l-417,498Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Pilões */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalPiloes">
                    <title>Pilões</title>
                    <path id="2410009" d="M-380998,-63303l433,191l254,-100l472,106l206,541l-1002,29l-363,-767Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Portalegre */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalPortalegre">
                    <title>Portalegre</title>
                    <path id="2410207" d="M-379828,-59685l-435,-225l-172,-172l-432,-68l533,-450l246,-364l278,208l266,460l-284,611Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Rafael Fernandes */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalRafaelFernandes">
                    <title>Rafael Fernandes</title>
                    <path id="2410504" d="M-381696,-61941l-39,241l-337,144l-419,-82l-285,-172l56,-416l229,-267l552,287l243,265Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Riacho de Santana */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalRiachoSantana">
                    <title>Riacho de Santana</title>
                    <path id="2410801" d="M-382720,-62226l-296,-187l-563,237l-214,-451l-294,-308l141,-516l633,164l-21,171l358,335l500,-116l-15,404l-229,267Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Fran. do Oeste */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalSFranciscoOeste">
                    <title>São Fran. do Oeste</title>
                    <path id="2411908" d="M-381215,-59458l-420,69l-385,-232l-502,-481l628,-361l51,283l399,457l299,132l-70,133Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Miguel */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalSaoMiguel">
                    <title>São Miguel</title>
                    <path id="2412500" d="M-383491,-61235l-249,-437l-348,-107l-572,565l-95,-356l-517,-364l75,-296l-507,-700l279,68l611,-182l-1,524l330,301l305,31l530,459l159,494Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Ten. Ananias */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalTAnanias">
                    <title>Ten. Ananias</title>
                    <path id="2414100" d="M-381256,-63672l-391,-196l-738,12l-142,-328l237,-649l373,-153l466,44l249,-282l493,585l-189,79l-358,888Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Venha-Ver */}
                <a className="direc-15" type="button" data-bs-toggle="modal" data-bs-target="#ModalVenhaVer">
                    <title>Venha-Ver</title>
                    <path id="2414753" d="M-385625,-63557l299,140l283,-144l459,259l8,5l-238,253l-611,182l-279,-68l-117,-263l196,-364Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*15ª DIREC */}
            {/*16ª DIREC */}
                {/*Bento Fernandes */}
                <a className="direc-16" type="button" data-bs-toggle="modal" data-bs-target="#ModalBentoFernandes">
                    <title>Bento Fernandes</title>
                    <path id="2401602" d="M-357468,-56197l-174,-186l-910,295l-301,-231l-260,22l-304,-391l75,-461l-54,-181l1625,166l1208,-16l242,36l-651,488l-107,279l-389,180Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Caiçara do Norte */}
                <a className="direc-16" type="button" data-bs-toggle="modal" data-bs-target="#ModalCaicaraNorte">
                    <title>Caiçara do Norte</title>
                    <path id="2401859" d="M-360375,-50515l-620,-257l-522,-1800l482,-293l527,-123l489,427l-591,274l235,1772Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Jandaira */}
                <a className="direc-16" type="button" data-bs-toggle="modal" data-bs-target="#ModalJandaira">
                    <title>Jandaira</title>
                    <path id="2405108" d="M-361517,-52572l-1241,-323l526,-1444l633,-2l314,-227l652,514l356,-398l353,-186l-200,647l-245,979l-139,24l-527,123l-482,293Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Jardim de Angicos */}
                <a className="direc-16" type="button" data-bs-toggle="modal" data-bs-target="#ModalJardimAngicos">
                    <title>Jardim de Angicos</title>
                    <path id="2405504" d="M-359342,-57149l-75,461l304,391l-811,1659l-701,-1915l385,-427l898,-169Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*João Câmara */}
                <a className="direc-16" type="button" data-bs-toggle="modal" data-bs-target="#ModalJoaoCamara">
                    <title>João Câmara (SEDE)</title>
                    <path id="2405801" d="M-358319,-53061l-1436,-260l-369,-670l200,-647l811,-1659l260,-22l301,231l910,-295l174,186l17,1614l-193,67l-498,-132l-177,1587Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Parazinho */}
                <a className="direc-16" type="button" data-bs-toggle="modal" data-bs-target="#ModalParazinho">
                    <title>Parazinho</title>
                    <path id="2408805" d="M-360124,-53991l369,670l1436,260l-83,715l83,246l-1203,-274l-497,-187l-489,-427l139,-24l245,-979Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Pedra Grande */}
                <a className="direc-16" type="button" data-bs-toggle="modal" data-bs-target="#ModalPedraGrande">
                    <title>Pedra Grande</title>
                    <path id="2409506" d="M-357909,-50774l-1174,179l-439,-1779l1203,274l410,1326Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Pedra Preta */}
                <a className="direc-16" type="button" data-bs-toggle="modal" data-bs-target="#ModalPedraPreta">
                    <title>Pedra Preta</title>
                    <path id="2409605" d="M-360625,-56553l701,1915l-353,186l-356,398l-652,-514l-124,-434l-311,-445l283,-222l5,-246l807,-638Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*Poço Branco */}
                <a className="direc-16" type="button" data-bs-toggle="modal" data-bs-target="#ModalPocoBranco">
                    <title>Poço Branco</title>
                    <path id="2410108" d="M-356256,-54923l-557,283l-638,57l-17,-1614l389,-180l107,-279l651,-488h3l-97,850l-170,429l-97,902l426,40Z" strokeWidth="200" stroke="black"></path>
                </a>
                {/*São Bento do Norte */}
                <a className="direc-16" type="button" data-bs-toggle="modal" data-bs-target="#ModalSBentoNorte">
                    <title>São Bento do Norte</title>
                    <path id="2411601" d="M-359083,-50595l-727,178l-565,-98l-235,-1772l591,-274l497,187l439,1779Z" strokeWidth="200" stroke="black"></path>
                </a>
            {/*16ª DIREC */}
        </g>   
    </svg>   

        <MapLegendContainer>
            <MapLegendSubContainer>
                <Title>Legenda</Title>
            </MapLegendSubContainer>
            <MapLegendSubContainer>
            {numbers.map( 
                (number) => 
                <MapLegendItem>
                    <MapLegendColor className={"direc"+number}/>
                    <MapLegendText>
                        {number}ª Direc
                    </MapLegendText>
                </MapLegendItem>
            )}
            </MapLegendSubContainer>
        </MapLegendContainer>

    </>

    
   );  
  
};

export default MapSVG;