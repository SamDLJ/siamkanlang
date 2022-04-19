import { 
	Button,
} from 'antd';

import { 
	SoundTwoTone
} from '@ant-design/icons';

import useSound from 'use-sound';

function importAll(r) {
  let items = [];
  r.keys().map((item, index) => { items[item.replace('./', '')] = r(item); });
  return items;
}

const sounds = importAll(require.context('./audio/speech', false, /\.(mp3|ogg|mpeg)$/));





export const LectureData = [
	{"Lecture 0": { 
		description: "Intro to Siamkan",
		slides: [
			{
				image: "siamkamap.png",
				text_position: "bottom",
				text: [
					<></>,
					<>Welcome to the Siamkan language <strong id="siamkan">siamago</strong> course!</>,
					<>Siamkan is a "conlang" (<strong>con</strong>structed <strong>lang</strong>uage), and is part of an ongoing worldbuilding project.</>,
					<>It is the main dialect and official language for the fictional nation of Siamka (island pictured above).</>,
				],
			},
		],
	}},
	{"Lecture 1": { 
		description: "Writing and Phonetics", 
		slides: [
			{
				image: "",
				text_position: "bottom",
				text: [
					<></>,
					<>The Siamkan language has scriptural and spoken variants, such as the older Tatie&#39;lic dialect.</>,
					<>
						<p><img id="lecimage" src={require("./images/batua.jpg")} width="200"/>&nbsp;&nbsp;<img id="lecimage" src={require("./images/iato-sig.png")} width="300"/></p>
						<p><img id="lecimage" src={require("./images/milren-note.jpg")} width="400"/></p>
						<p>&nbsp;</p>
					</>,
					<>
						It is written left-to-right, with words separated by spaces.
						The vertical spacing for each ‘letter’ is shown below, printed as well as in cursive:<p>&nbsp;</p>
						<p><img id="lecimage" src={require("./images/written.png")} width="680"/></p>
						
					</>,
				]
			},
			{
				image: "",
				text_position: "bottom",
				text: [
					<></>,
					<>Like English, Siamkan has a defective orthography and does not have a perfect correlation
					 between the sounds produced and the way it is written. Although more subtle than in English, 
					this inconsistency is evident especially in the vowels. 
					There are 6 written characters that correspond to the six monophthongs ('single' vowels):</>,
					<p style={{textAlign: "left", position: "relative", top: "-20px"}}>
					<strong id="siamkan-med">a</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>a</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						sounds somewhere between b<u><i>a</i></u>nd and G<u><i>a</i></u>ndalf
					</p>,
					<p style={{textAlign: "left", position: "relative", top: "-20px"}}>
						<strong id="siamkan-med">e</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>e</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						sounds like the <i>e</i> in b<u><i>e</i></u>t
					</p>,
					<p style={{textAlign: "left", position: "relative", top: "-20px"}}>
						<strong id="siamkan-med">i</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>i</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						has a sound between <i>i</i> in b<u><i>i</i></u>t and the <i>i</i> in spaghett<u><i>i</i></u>
					</p>,
					<p style={{textAlign: "left", position: "relative", top: "-20px"}}>
						<strong id="siamkan-med">o</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>o</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						is like the <i>o</i> in d<u><i>o</i></u>t
					</p>,
					<p style={{textAlign: "left", position: "relative", top: "-20px"}}>
						<strong id="siamkan-med">u</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>u</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						is like the <i>o</i> in b<u><i>o</i></u>ld. Or, like the <i>oo</i> in f<u><i>oo</i></u>d, although
						not velarized&mdash;i.e. the back of the tongue is never raised.
					</p>,
					<p style={{textAlign: "left", position: "relative", top: "-20px"}}>
						
						<strong id="siamkan-med">E</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ə</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						is like the <i>u</i> in h<u><i>u</i></u>rt without the ‘r’ sound, or like the <i>ö</i> in G<u><i>ö</i></u>del. 
						In some cases, it is somewhere between p<u><i>u</i></u>tt and p<u><i>u</i></u>t.
						You can think of it as a kind of 'stressed schwa', if that makes any sense.
					</p>,
					
				]
			},
			{
				image: "",
				text_position: "bottom",
				text: [
					<></>,
					<>There are 16 diphthongs (combinations of 2 'singular' vowels):</>,
					<p style={{textAlign: "left", height: "3em"}}>
						<strong id="siamkan-med">ou</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ou</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>o</i></u>pen
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">uo</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>uo</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>wo</i></u>man, <u><i>wo</i></u>n, Mandarin g<u><i>uo</i></u>
					</p>,
					<p style={{textAlign: "left", height: "3em"}}>
						<strong id="siamkan-med">au</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>au</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						n<u><i>ow</i></u>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">ua</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ua</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>wa</i></u>nd, <u><i>wha</i></u>ck
					</p>,
					<p style={{textAlign: "left", height: "3em"}}>
						<strong id="siamkan-med">oe</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>oe</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>wi</i></u>n, <u><i>we</i></u>t
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">eo</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>eo</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						like m<u><i>ay</i></u>o but without the 'y' in between
					</p>,
					<p style={{textAlign: "left", height: "3em"}}>
						<strong id="siamkan-med">oi</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>oi</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						t<u><i>oy</i></u>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						
						<strong id="siamkan-med">io</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>io</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>yo</i></u>gurt
					</p>,
					<p style={{textAlign: "left", height: "3em"}}>
						<strong id="siamkan-med">ei</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ei</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						b<u><i>i</i></u>ke, p<u><i>ai</i></u>nt
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">ie</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ie</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>ye</i></u>s, or like b<u><i>i</i></u>t with a southern American accent
					</p>,
					<p style={{textAlign: "left", height: "3em"}}>
						<strong id="siamkan-med">ai</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ai</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						tr<u><i>y</i></u>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">ia</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ia</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>ya</i></u>ught, <u><i>yu</i></u>ck
					</p>,
					<p style={{textAlign: "left", height: "3em"}}>
						<strong id="siamkan-med">uu</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>uu</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>wou</i></u>nd
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">ii</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ii</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>yea</i></u>r
					</p>,
					<p style={{textAlign: "left", height: "3em"}}>
						<strong id="siamkan-med">iu</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>iu</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>you</i></u>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">ui</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ui</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						<u><i>we</i></u>
					</p>,
					
				]
			},
			{
				image: "",
				text_position: "bottom",
				text: [
					<></>,
					<>The set of consonants includes 4 clicks, 4 unvoiced plosives, 4 voiced plosives, 4 nasals, 
						3 approximants, 4 fricatives, and a set of 4 consonant clusters, for a total of 27 consonant sounds. 
						The English pronunciation can be assumed wherever an example is not given for the romanization:</>,
					<p style={{textAlign: "left"}}>
						
						<strong id="siamkan-med">f</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>f</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">s</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>s</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">x</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>x</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">h</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>h</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<p><strong>f</strong> and <strong>s</strong> can be voiced, as in <u><i>v</i></u>an or <u><i>z</i></u>oo, respectively.&nbsp;&nbsp;
						<strong>x</strong> is like the <i>sh</i> in <u><i>sh</i></u>oe. <strong>h</strong> is slightly velarized, like the <i>ch</i> in lo<u><i>ch</i></u>
						</p>
					</p>,
					<p style={{textAlign: "left"}}>
						<strong id="siamkan-med">b</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>b</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">d</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>d</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">j</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>j</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">g</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>g</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<p style={{position: "relative", top: "-20px"}}>
						<strong id="siamkan-med">p</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>p</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">t</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>t</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">q</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>q</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">k</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>k</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
						<p style={{position: "relative", top: "-30px"}}><strong>q</strong> is like the <i>ch</i> in <u><i>ch</i></u>ew
						</p>
					</p>,
					<p style={{textAlign: "left", position: "relative", top: "-30px" }}>
						<strong id="siamkan-med">m</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>m</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">n</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>n</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">R</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ɳ</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">G</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>ŋ</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<p><strong>ɳ</strong> is a nasalized r, sometimes like <i>rn</i> in ba<u><i>rn</i></u>.&nbsp;&nbsp;
						<strong>ŋ</strong> is like <i>ng</i> in so<u><i>ng</i></u>
						</p>
					</p>,
					<p style={{textAlign: "left", position: "relative", top: "-40px" }}>
						<p style={{height: "0px"}}>&nbsp;</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">r</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>r</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">y</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>y</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">l</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>l</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<p>
						 <strong>r</strong> is 'flapped' like the Spanish <u><i>r</i></u>osa. &nbsp;&nbsp;
						 <strong>y</strong> is like the soft <i>j</i> in the French <u><i>j</i></u>aune.&nbsp;&nbsp;
						 The 'l' in English tends to be a voiced velar lateral approximant (IPA: /<strong>L</strong>/), as in fu<u><i>ll</i></u> or midd<u><i>l</i></u>e, 
						 where the airflow gets restricted by back of the tongue and the tip of the tongue touches the alveolar ridge just behind the top teeth. 
						 Siamkan <strong>l</strong> (IPA: /<strong>ɭ</strong>/), however, is a post-alveolar lateral consonant, and should have no velar component.
						 In most dialects, <strong>l</strong> sounds like <strong>r</strong> when it follows a plosive.
						 
						</p>
					</p>,
				]
			},
			{
				image: "",
				text_position: "bottom",
				text: [
					<p style={{textAlign: "center"}}>
						<strong id="siamkan-med">P</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>pp</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">T</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>tt</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">Q</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>qq</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">K</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>kk</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<p>
						The four consonant clusters consist of a fricative followed by a plosive. &nbsp;&nbsp;
						<strong>pp</strong> is like o<u><i>ff</i></u>-<u><i>p</i></u>utting, or sometimes like <u><i>sp</i></u>oon.&nbsp;&nbsp;
						<strong>tt</strong> is like po<u><i>st</i></u>er or, in some dialects, may have a dental component as in ba<u><i>tht</i></u>ub.&nbsp;&nbsp;
						<strong>qq</strong> is like ca<u><i>sh</i></u> <u><i>ch</i></u>eck or po<u><i>st</i></u>ure.&nbsp;&nbsp; 
						<strong>kk</strong> is like Ba<u><i>ch</i></u> <u><i>k</i></u>ey or ba<u><i>sk</i></u>et.
						</p>
					</p>,
					<p style={{textAlign: "center"}}>
						<strong id="siamkan-med">$</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>!t</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">!</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>!q</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">#</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>!k</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<strong id="siamkan-med">%</strong>&nbsp;&nbsp;&nbsp;&nbsp;(<strong>!l</strong>)&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<p>
						 <strong>!t</strong> sounds like the “tsk” one makes when expressing pity or disappointment&mdash;the 
						position of the tongue is the same as <strong>t</strong>.&nbsp;
						 <strong>!q</strong> is a popping sound, kind of similar to when a lid pops on a glass jar&mdash;the 
						 tongue is positioned like <strong>ɳ</strong>.&nbsp;
						 <strong>!k</strong> is like the "tchick" used in getting a horse to move&mdash;the
						 sound comes from the sides of the tongue while the tip of the tongue remains fixed to the roof of the mouth.&nbsp;
						 <strong>!l</strong> is like the “tcluck” sound a clock makes&mdash;the tongue slaps against the floor of the mouth.
						 
						</p>
					</p>,
					<p style={{textAlign: "center"}}>
						 The four click consonants can be challenging. They may be found after 
						 an initial vowel at the start of a word, but other than that a click will never be in the middle of a word.
						 As clicks are non-pulmonic, a slight pause can be heard between the click and the following vowel&mdash;this
						 is normal and can also help with fluency.
					</p>,
					<p style={{textAlign: "center"}}>
						 <p>&nbsp;</p><p>&nbsp;</p>
						 Let&#39;s practice some phrases!
					</p>,
				]
			},
		]
	}},
	{"Lecture 2": { 
		description: "VSO Order", 
		slides: [
			{
				image: "",
				text_position: "bottom",
				text: [
					<>Well done!</>,
					<>Siamkan has a verb-subject-object (VSO) typology, with the initial main verb or action emphasized as the most important part of the sentence.</>,
					<>
						For example, in the sentence "I eat the apple.", <i>I</i> is the subject, <i>eat</i> is the verb, and <i>the apple</i> is the direct object.
						To translate into Siamkan, the verb <i>eat</i> is put first:
						<p></p>
						<div style={{display: "inline-block", textAlign: "right"}}>
							<table>
								<tr><td style={{color: "#227700"}}>commonspeak&nbsp;&nbsp;&nbsp;</td><td id="rowe">I eat the apple.</td></tr>
								<tr><td style={{color: "#227700"}}>restructured syntax&nbsp;&nbsp;&nbsp;</td><td id="rowg">eat I apple</td></tr>
								<tr><td style={{color: "#227700"}}>pronunciation&nbsp;&nbsp;&nbsp;</td><td id="rowr">bid ek uudo</td></tr>
						  	<tr><td style={{color: "#227700"}}>written&nbsp;&nbsp;&nbsp;</td><td id="roww">bid ek uudo</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
						</div>
					</>,
					<>
						Here are some more examples:
						<p></p>
						<div style={{display: "inline-block"}}>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>He says hi.</td></tr>
								<tr id="rowg"><td>say he hi</td></tr>
								<tr id="rowr"><td>dame sag tiefa</td></tr>
						  	<tr id="roww"><td>dame sag tiefa</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>The mouse hides.</td></tr>
								<tr id="rowg"><td>hide mouse</td></tr>
								<tr id="rowr"><td>giu pxiko</td></tr>
						  	<tr id="roww"><td>giu pxiko</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>The mouse hides the cheese.</td></tr>
								<tr id="rowg"><td>hide mouse cheese</td></tr>
								<tr id="rowr"><td>gəiu pxiko qisə</td></tr>
						  	<tr id="roww"><td>gEiu pxiko qisE</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
						</div>
						
					</>,
					<>
						Note the difference between <strong>giu</strong> and <strong>gəiu</strong>. 
						They both mean <i>to hide</i>, but the latter is used as a direct action on the object. 
						Also note the lack of definite and indefinite articles, like <i>the</i>, <i>a</i>, or <i>an</i>&mdash;the 
						specificity of the noun is implied through context.
						Siamkan is full of irregularities like these, so don&#39;t expect any patterns.
					</>,
				]
			},
			{
				image: "",
				text_position: "bottom",
				text: [
					<></>,
					<>Siamkan does not conjugate its verbs. The word <strong>goha</strong> is an adverb meaning <i>still</i> or <i>continually</i>, 
						and is used for the progressive form of the verb, 
					or to emphasize something happening at the current moment (<i>now</i>):
					</>,
					<>
						<div style={{display: "inline-block"}}>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>The cat kills the mouse.</td></tr>
								<tr id="rowg"><td>kill cat mouse</td></tr>
								<tr id="rowr"><td>kvag o!qalo pxiko</td></tr>
						  	<tr id="roww"><td>kfag o!alo pxiko</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>The cat is killing the mouse.</td></tr>
								<tr id="rowg"><td>kill.PROG cat mouse</td></tr>
								<tr id="rowr"><td>kvag goha o!qalo pxiko</td></tr>
						  	<tr id="roww"><td>kfag goha o!alo pxiko</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>I am hiding it now.</td></tr>
								<tr id="rowg"><td>hide.PROG I it</td></tr>
								<tr id="rowr"><td>gəiu goha ek sug</td></tr>
						  	<tr id="roww"><td>gEiu goha ek sug</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
						</div>
					</>,
					<>
						<div>Past-tense verbs have the suffix <strong>-en</strong> or <strong>-nen</strong>:</div>
						<div>&nbsp;</div>
						<div style={{display: "inline-block"}}>
							
							<table style={{float: "left"}}>
								<tr id="rowe"><td>She saw me.</td></tr>
								<tr id="rowg"><td>see.PAST she me</td></tr>
								<tr id="rowr"><td>keta-nen saŋ ek</td></tr>
						  	<tr id="roww"><td>ketanen saG ek</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>The dog was eating.</td></tr>
								<tr id="rowg"><td>eat.PAST.PROG dog</td></tr>
								<tr id="rowr"><td>bid-en goha piŋo</td></tr>
						  	<tr id="roww"><td>biden goha piGo</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>It waited.</td></tr>
								<tr id="rowg"><td>wait.PAST it</td></tr>
								<tr id="rowr"><td>afat-en sug</td></tr>
						  	<tr id="roww"><td>afaten sug</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
						</div>
					</>,
					<>
						<div>If the sentence is not in present-tense and the meaning is clear, 
								the pronoun <strong>sug</strong> can be dropped. Otherwise, a verb by itself becomes a command:</div>
						<div>&nbsp;</div>
						<div style={{display: "inline-block"}}>
							
							<table style={{float: "left"}}>
								<tr id="rowe"><td>It hid.</td></tr>
								<tr id="rowg"><td>hide.PAST it</td></tr>
								<tr id="rowr"><td>giu-en sug</td></tr>
						  	<tr id="roww"><td>giuen sug</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>It hid.</td></tr>
								<tr id="rowg"><td>hide.PAST</td></tr>
								<tr id="rowr"><td>giu-en</td></tr>
						  	<tr id="roww"><td>giuen</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>Hide!</td></tr>
								<tr id="rowg"><td>hide</td></tr>
								<tr id="rowr"><td>giu</td></tr>
						  	<tr id="roww"><td>giu</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>Wait!</td></tr>
								<tr id="rowg"><td>wait</td></tr>
								<tr id="rowr"><td>afat</td></tr>
						  	<tr id="roww"><td>afat</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>Eat this.</td></tr>
								<tr id="rowg"><td>eat you this</td></tr>
								<tr id="rowr"><td>bid al sug</td></tr>
						  	<tr id="roww"><td>bid al sug</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
						</div>
					</>,
				]
			},
		]
	}},
	{"Lecture 3": { 
		description: "Modifiers and Indirect Objects",
		slides: [
			{
				image: "",
				text_position: "bottom",
				text: [
					<></>,
					<>Take a look at the following:<div>&nbsp;</div>
					<div>
						<div style={{display: "inline-block"}}>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>I give the apple.</td></tr>
								<tr id="rowg"><td>give I apple</td></tr>
								<tr id="rowr"><td>pu ek uudo</td></tr>
						  	<tr id="roww"><td>pu ek uudo</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>He paints the house.</td></tr>
								<tr id="rowg"><td>paint he house</td></tr>
								<tr id="rowr"><td>!qoba&#39;l sag !qaiibo</td></tr>
						  	<tr id="roww"><td>!obaEl sag !aiibo</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							
						</div>
					</div>
					</>,
					<>Despite being complete sentences, it seems they don&#39;t reveal enough information. 
								<i>To whom</i> was the apple given? <i>What colour</i> did he use to paint the house?
					</>,
					<>
						<div style={{display: "inline-block"}}>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>I give you the apple.</td></tr>
								<tr id="rowg"><td>give.&#123;to: you&#125; I apple</td></tr>
								<tr id="rowr"><td>pu bo al ek uudo</td></tr>
						  	<tr id="roww"><td>pu bo al ek uudo</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>He paints the house red.</td></tr>
								<tr id="rowg"><td>paint.&#123;red&#125; he house</td></tr>
								<tr id="rowr"><td>!qoba&#39;l uuna&#39;da sag !qaiibo</td></tr>
						  	<tr id="roww"><td>!obaEl uunaEda sag !aiibo</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
						</div>
					</>,
					<>
						In the example above, the indirect object <i>you</i> acts as a recipient for the direct object <i>the apple</i>.
						In Siamkan, the direction or manner is always explicitly stated using a preposition,
						so that the action is being done <i>to</i>, <i>by</i>, or <i>for</i> the indirect object.
					</>,
					<>
						Modifiers in Siamkan always go after the verb, subject, or object they are modifying. 
						This includes adjectives, adverbs, adverbial phrases, and adpositional phrases.
						In this language course, modifiers will be notated using curly braces &#39;&#123; &#125;&#39;. 
					</>,
				]
			},
			{
				image: "",
				text_position: "bottom",
				text: [
					<>Possession and possessive pronouns are created in a similar fashion, using the preposition <i>of</i>:<div>&nbsp;</div>
					<div>
						<div style={{display: "inline-block"}}>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>His dog is eating.</td></tr>
								<tr id="rowg"><td>eat.PROG dog.&#123;of: him&#125;</td></tr>
								<tr id="rowr"><td>bid goha piŋo gl sag</td></tr>
						  	<tr id="roww"><td>bid goha piGo gl sag</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>This is my apple.</td></tr>
								<tr id="rowg"><td>is this apple.&#123;of: me&#125;</td></tr>
								<tr id="rowr"><td>ss sug uudo gl ek</td></tr>
						  	<tr id="roww"><td>ss sug uudo gl ek</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>She painted her house white.</td></tr>
								<tr id="rowg"><td>paint.PAST.&#123;white&#125; she house.&#123;of: her&#125;</td></tr>
								<tr id="rowr"><td>!qoba&#39;len ttir saŋ !qaiibo gl saŋ</td></tr>
						  	<tr id="roww"><td>!obaElen Tir saG !aiibo gl saG</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							
						</div>
					</div>
						
					</>,
					<>
								If the main verb is not <strong>ss</strong> and the preposition <i>of</i> is modifying it, 
								the action is <i>caused by</i> or is done <i>because of</i> the indirect object:
					<div>&nbsp;</div>
						<div style={{display: "inline-block"}}>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>You made me jump!</td></tr>
								<tr id="rowg"><td>jump.PAST.&#123;of: you&#125; me</td></tr>
								<tr id="rowr"><td>thefen gl al ek</td></tr>
						  	<tr id="roww"><td>thefen gl al ek</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>Mice run from cats.</td></tr>
								<tr id="rowg"><td>run.&#123;of: cat&#125; mouse</td></tr>
								<tr id="rowr"><td>e!kam gl o!qalo pxiko</td></tr>
						  	<tr id="roww"><td>e#am gl o!alo pxiko</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr><td>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td></tr>
							</table>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>This is mine.</td></tr>
								<tr id="rowg"><td>is.&#123;of: me&#125; it</td></tr>
								<tr id="rowr"><td>ss gl ek sug</td></tr>
						  	<tr id="roww"><td>ss gl ek sug</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
						</div>
					</>,
					<>
						Note that <i>me</i> in the first example, <i>mouse</i> in the second example, and <i>it</i> in the third example
						are all subjects&mdash;each of the three sentences above has no direct object.
						<p></p>
						In the third example above, <i>of</i> is modifying the verb <i>is</i>. 
						This translates literally to <i>It exists in a way that belongs to me</i> or <i>It exists because of me.</i>
					</>,
					
				]
			},
			{
				image: "",
				text_position: "bottom",
				text: [
					<>
					Here is a more complex sentence, combining several prepositions:
					</>,
					<>
					<div>
						<div style={{display: "inline-block"}}>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>The cat ran from the sofa, under the table.</td></tr>
								<tr id="rowg"><td>run.PAST.&#123;from: sofa&#125;&#123;to: table.&#123;under&#125;&#125; cat</td></tr>
								<tr id="rowr"><td>e!kam-en əti xioqo bo !tagie&#39;do-smiu o!qalo</td></tr>
						  	<tr id="roww"><td>e#amen Eti xioqo bo $agieEdosmiu o!alo</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
						</div>
					</div>
					</>,
					<>Prepositions have two forms. In this example, the prepositions <strong>əti</strong> (<i>from</i>) and <strong>bo</strong> (<i>toward</i>) are placed first to introduce
					the objects <strong>xioqo</strong> (<i>sofa</i>) and <strong>!tagie&#39;do</strong> (<i>table</i>), respectively.</>,
					<>The second way to use prepositions is to append them as a suffix to their object or noun, with <strong>-s-</strong> infixed between them.
					The phrase <i>under the table</i> can be <strong>miu !tagie&#39;do</strong> or <strong>!tagie&#39;do<u>s</u>miu</strong>
					, and <i>from the sofa</i> can be <strong>əti xioqo</strong> or <strong>xioqo<u>s</u>əti</strong>.
					</>,
					<>
					If the prepositional phrase begins a sentence, use the <strong>s-</strong> form:
						<div>&nbsp;</div>
						<div style={{display: "inline-block"}}>
							<table style={{float: "left"}}>
								<tr id="rowe"><td>From my point of view, he ate the mouse.</td></tr>
					<tr id="rowg"><td>&#123;from: sight.&#123;of: me&#125;&#125; &lt;&gt; eat.PAST he mouse</td></tr>
								<tr id="rowr"><td>səti keta gl ek biden sag pxiko</td></tr>
						  	<tr id="roww"><td>sEti keta gl ek biden sag pxiko</td></tr>
								<tr><td>&nbsp;</td></tr>
							</table>
						</div>
					</>,
					<>
					Let&#39;s practise some vocabulary!
					</>,
				]
			},
		]
	}},
	{"Lecture 4a": { description: "Modifiers: Adverbs and Adjectives"}},
	{"Lecture 4b": { description: "Modifiers: Adpositional Phrases"}},
];