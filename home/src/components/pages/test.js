import React, { Component , useState} from "react"; 
import '../../App.css';
import './test.css';
import Mark from './marks.js';

function Test () {
  const [showQ1,setShowQ1] = useState(0);
  const [showQ2,setShowQ2 ] = useState(0);
  const [showQ3,setShowQ3 ] = useState(0);
  const [showQ4,setShowQ4 ] = useState(0);
  const [showQ5,setShowQ5 ] = useState(0);
  const [showQ6,setShowQ6 ] = useState(0);
  const [showQ7,setShowQ7 ] = useState(0);
  const [showQ8,setShowQ8 ] = useState(0);
  const [showQ9,setShowQ9 ] = useState(0);
  const [showQ10,setShowQ10 ] = useState(0);
  const [showQ11,setShowQ11 ] = useState(0);
  const [showQ12,setShowQ12 ] = useState(0);
  const [showQ13,setShowQ13 ] = useState(0);
  const [showQ14,setShowQ14 ] = useState(0);
  const [showQ15,setShowQ15 ] = useState(0);
  const [showQ16,setShowQ16 ] = useState(0);
  const [showQ17,setShowQ17 ] = useState(0);
  const [showQ18,setShowQ18 ] = useState(0);
  const [showQ19,setShowQ19 ] = useState(0);
  const [showQ20,setShowQ20 ] = useState(0);
  const [showQ21,setShowQ21 ] = useState(0);
  const [showQ22,setShowQ22 ] = useState(0);
  const [showQ23,setShowQ23 ] = useState(0);
  const [showResult, setShowResult] = useState(false);
return (
  <div>
  <div className="quiz" style={showResult? {'display':"none"}:{'display':"block"}}>
    <div>
    <title>Quiz</title>
    </div>
    <div id="quizpage">
    <h2>QUIZ</h2><br/>
    <form name="quiz" id="quiz">
    <div className="aptitude">
      <h3>1.)  By working 5 hours/day, 4 waiters can serve 250 dishes in 8 days. 2 waiters would require how many hours/day to serve 500 dishes in 20 days?</h3>
      <p><input type="radio" onChange={()=>{setShowQ1(1)}} name="q1" value="1"/>a) 6 hours/day</p>
      <p><input type="radio" onChange={()=>{setShowQ1(2)}} name="q1" value="2"/>b) 8 hours/day</p>
      <p><input type="radio" onChange={()=>{setShowQ1(3)}} name="q1" value="3"/>c) 7 hours/day</p>
      <p><input type="radio" onChange={()=>{setShowQ1(4)}} name="q1" value="4"/>d) 9 hours/day</p>
    </div>
    
      <div className="aptitude">
      <h3>2.)  Find a two-digit number whose product of the digits is 8 and when 18 is added to this number, the digits are reversed.</h3>
      <p><input type="radio" onChange={()=>{setShowQ2(1)}} name="q2" value="1"/>a) 18</p>
      <p><input type="radio" onChange={()=>{setShowQ2(2)}} name="q2" value="2"/>b) 42</p>
      <p><input type="radio" onChange={()=>{setShowQ2(3)}} name="q2" value="3"/>c) 24</p>
      <p><input type="radio" onChange={()=>{setShowQ2(4)}} name="q2" value="4"/>d) 81</p>
    </div>
    
        <div className="aptitude">
      <h3>3.) What is the probability that a chosen number is a perfect cube if it is chosen at random from the set (1, 2, 3…, 100)?</h3>
      <p><input type="radio" onChange={()=>{setShowQ3(1)}} name="q3" value="1"/>a) 4/13</p>
      <p><input type="radio" onChange={()=>{setShowQ3(2)}} name="q3" value="2"/>b) 1/2</p>
      <p><input type="radio" onChange={()=>{setShowQ3(3)}} name="q3" value="3"/>c) 1/25</p>
      <p><input type="radio" onChange={()=>{setShowQ3(4)}} name="q3" value="4"/>d) 1/10</p>
    </div>
    
      <div className="aptitude">
      <h3>4.) Arun, Kartik and Mira can do a work in 90, 30 and 45 days respectively. If they work together, in how many days will they complete work?</h3>
      <p><input type="radio" onChange={()=>{setShowQ4(1)}} name="q4" value="1"/>a) 10</p>
      <p><input type="radio" onChange={()=>{setShowQ4(2)}} name="q4" value="2"/>b) 20</p>
      <p><input type="radio" onChange={()=>{setShowQ4(3)}} name="q4" value="3"/>c) 25</p>
      <p><input type="radio" onChange={()=>{setShowQ4(4)}} name="q4" value="4"/>d) 15</p>
    </div>
    
    
    <h3>In below mentioned question, there is a relationship between given words on one side of: : and another word on another side of: : . Find another word that has the same relation with the words in the given pair bear.</h3>
    <div className="aptitude">
      <h3>5.)Scribble: Write: : Stammer : ?</h3>
      <p><input type="radio" onChange={()=>{setShowQ5(1)}} name="q5" value="1"/>a) walk</p>
      <p><input type="radio" onChange={()=>{setShowQ5(2)}} name="q5" value="2"/>b) dance</p>
      <p><input type="radio" onChange={()=>{setShowQ5(3)}} name="q5" value="3"/>c) play</p>
      <p><input type="radio" onChange={()=>{setShowQ5(4)}} name="q5" value="4"/>d) speak</p>
    </div>

    <div className="investigate">
      <h3>Study the structure of the human body</h3>
      <p><input type="radio" onChange={()=>{setShowQ6(1)}} name="q6" value="1"/>a) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ6(2)}} name="q6" value="2"/>b) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ6(3)}} name="q6" value="3"/>c) dislike</p>
    </div>

    <div className="investigate">
      <h3>Conduct biological research</h3>
      <p><input type="radio" onChange={()=>{setShowQ7(1)}} name="q7" value="1"/>a) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ7(2)}} name="q7" value="2"/>b) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ7(3)}} name="q7" value="3"/>c) enjoy</p>
    </div>

    <div className="investigate">
      <h3>Study animal behavior</h3>
      <p><input type="radio" onChange={()=>{setShowQ8(1)}} name="q8" value="1"/>a) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ8(2)}} name="q8" value="2"/>b) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ8(3)}} name="q8" value="3"/>c) dislike</p>
    </div>

    <div className="enterprising">
      <h3>Conduct a musical choir</h3>
      <p><input type="radio" onChange={()=>{setShowQ9(1)}} name="q9" value="1"/>a) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ9(2)}} name="q9" value="2"/>b) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ9(3)}} name="q9" value="3"/>c) enjoy</p>
    </div>

    <div className="enterprising">
      <h3>Write a song</h3>
      <p><input type="radio" onChange={()=>{setShowQ10(1)}} name="q10" value="1"/>a) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ10(2)}} name="q10" value="2"/>b) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ10(3)}} name="q10" value="3"/>c) enjoy</p>
    </div>

    <div className="enterprising">
      <h3>Design sets for plays</h3>
      <p><input type="radio" onChange={()=>{setShowQ11(1)}} name="q11" value="1"/>a) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ11(2)}} name="q11" value="2"/>b) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ11(3)}} name="q11" value="3"/>c) neutral</p>
    </div>

    <div className="social">
      <h3>Give career guidance to people</h3>
      <p><input type="radio" onChange={()=>{setShowQ12(1)}} name="q12" value="1"/>a) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ12(2)}} name="q12" value="2"/>b) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ12(3)}} name="q12" value="3"/>c) dislike</p>
    </div>

    <div className="social">
      <h3>Do volunteer work at a non-profit organization</h3>
      <p><input type="radio" onChange={()=>{setShowQ13(1)}} name="q13" value="1"/>a) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ13(2)}} name="q13" value="2"/>b) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ13(3)}} name="q13" value="3"/>c) enjoy</p>
    </div>

    <div className="social">
      <h3>Help people who have problems with drugs or alcohol </h3>
      <p><input type="radio" onChange={()=>{setShowQ14(1)}} name="q14" value="1"/>a) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ14(2)}} name="q14" value="2"/>b) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ14(3)}} name="q14" value="3"/>c) dislike</p>
    </div>

    <div className="business">
      <h3>Sell restaurant franchises to individuals</h3>
      <p><input type="radio" onChange={()=>{setShowQ15(1)}} name="q15" value="1"/>a) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ15(2)}} name="q15" value="2"/>b) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ15(3)}} name="q15" value="3"/>c) enjoy</p>
    </div>

    <div className="business">
      <h3>Sell merchandise at a department store</h3>
      <p><input type="radio" onChange={()=>{setShowQ16(1)}} name="q16" value="1"/>a) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ16(2)}} name="q16" value="2"/>b) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ16(3)}} name="q16" value="3"/>c) neutral</p>
    </div>

    <div className="business">
      <h3>Run a toy store</h3>
      <p><input type="radio" onChange={()=>{setShowQ17(1)}} name="q17" value="1"/>a) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ17(2)}} name="q17" value="2"/>b) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ17(3)}} name="q17" value="3"/>c) dislike</p>
    </div>

    <div className="engineering">
      <h3>Use a computer program to generate customer bills</h3>
      <p><input type="radio" onChange={()=>{setShowQ18(1)}} name="q18" value="1"/>a) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ18(2)}} name="q18" value="2"/>b) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ18(3)}} name="q18" value="3"/>c) neutral</p>
    </div>

    <div className="engineering">
      <h3>Assemble electronic parts</h3>
      <p><input type="radio" onChange={()=>{setShowQ19(1)}} name="q19" value="1"/>a) enjoy </p>
      <p><input type="radio" onChange={()=>{setShowQ19(2)}} name="q19" value="2"/>b) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ19(3)}} name="q19" value="3"/>c) dislike</p>
    </div>

    <div className="engineering">
      <h3>Compute and record statistical and other numerical data</h3>
      <p><input type="radio" onChange={()=>{setShowQ20(1)}} name="q20" value="1"/>a) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ20(2)}} name="q20" value="2"/>b) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ20(3)}} name="q20" value="3"/>c) dislike</p>
    </div>

    <div className="art">
      <h3>Design artwork for magazines</h3>
      <p><input type="radio" onChange={()=>{setShowQ21(1)}} name="q21" value="1"/>a) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ21(2)}} name="q21" value="2"/>b) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ21(3)}} name="q21" value="3"/>c) neutral</p>
    </div>

    <div className="art">
      <h3>Direct a play</h3>
      <p><input type="radio" onChange={()=>{setShowQ22(1)}} name="q22" value="1"/>a) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ22(2)}} name="q22" value="2"/>b) neutral</p>
      <p><input type="radio" onChange={()=>{setShowQ22(3)}} name="q22" value="3"/>c) enjoy</p>
    </div>

    <div className="art">
      <h3>Write books or plays</h3>
      <p><input type="radio" onChange={()=>{setShowQ23(1)}} name="q23" value="1"/>a) enjoy</p>
      <p><input type="radio" onChange={()=>{setShowQ23(2)}} name="q23" value="2"/>b) dislike</p>
      <p><input type="radio" onChange={()=>{setShowQ23(3)}} name="q23" value="3"/>c) neutral</p>
    </div>
    <input type="button" value="Submit" onClick={()=>{console.log(1);setShowResult(true);console.log(showResult);}}/> 
  </form>
</div>
</div>
<div style={!showResult ? {'display':"none"}:{'display':"block"}}>
<Mark ans={[showQ1, showQ2,showQ3,showQ4,showQ5,showQ6,showQ7, showQ8,showQ9, showQ10,showQ11, showQ12,showQ13, showQ14,showQ15, showQ16,showQ17, showQ18,showQ19, showQ20,showQ21, showQ22, showQ23]}/>
</div>
</div>
);
}

export default Test;
