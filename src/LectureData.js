//import React from 'react';

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
						<p><img src="./images/batua.jpg" width="200"/>&nbsp;&nbsp;<img src="./images/iato-sig.png" width="300"/></p>
						<p><img src="./images/milren-note.jpg" width="400"/></p>
						<p>&nbsp;</p>
					</>,
					<>
						It is written left-to-right, with words separated by spaces.
						The vertical spacing for each ‘letter’ is shown below, printed as well as in cursive:<p>&nbsp;</p>
						<p><img src="./images/written.png" width="680"/></p>
						
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
						 Siamkan <strong>l</strong>, however, is a post-alveolar lateral consonant, and should have no velar component.
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
				image: "image-000.png",
				text: ["dfaodgjijij"],
			},
			{
				image: "image-006.png",
				text: ["sadjgiajoi jaiojiodja"],
			},
			{
				image: "image-008.png",
				text: ["djadsknvsjaj dji niuiu  iu u id hui hudfhdui hu h  hh  bnjkdbnknfjk huhe kufajk"],
			}
		]
	}},
	{"Lecture 3": { 
		description: "Indirect Objects",
		slides: [
			{
				image: "image-007.png",
				text: ["dfaodgjijij"],
			},
			{
				image: "image-008.png",
				text: ["sadjgiajoi jaiojiodja"],
			},
			{
				image: "image-005.png",
				text: ["djadsknvsjaj dji niuiu  iu u id hui hudfhdui hu h  hh  bnjkdbnknfjk huhe kufajk"],
			}
		]
	}},
	{"Lecture 4a": { description: "Modifiers: Adverbs and Adjectives"}},
	{"Lecture 4b": { description: "Modifiers: Adpositional Phrases"}},
];