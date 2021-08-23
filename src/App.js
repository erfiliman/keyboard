import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Keyboard from "./Components/Keyboard/Keyboard";
import keyboardItemsInfo from "./KeyboardItemsInfo";
import {useEffect, useRef, useState} from "react";
import LetterItem from "./Components/LetterItem/LetterItem";
import ExerciseTool from "./Components/ExerciseTool/ExerciseTool";
import NoticeItem from "./Components/NoticeItem/NoticeItem";
import Results from "./Components/Results/Results";

function App(props) {
    const [keyboardItems, setKeyboardItems]  = useState(keyboardItemsInfo);
    const [activeCode, setActiveCode]  = useState(0);
    const [loadSentence, setLoadSentence]  = useState(true);
    const [showTextArea, setShowTextArea]  = useState(false);
    const [currentPosition, setCurrentPosition]  = useState(0);
    const [countCorrectSentences, setCountCorrectSentences]  = useState(0);
    const [countCorrect, setCountCorrect]  = useState(0);
    const [countError, setCountError]  = useState(0);
    const [results, setResults]  = useState(localStorage.getItem('notification') === null ? [] : JSON.parse(localStorage.getItem('notification')));
    const [notifications, setNotifications]  = useState([]);
    const [timeForSymbol, setTimeForSymbol]  = useState(0);
    const [timeForPrevSymbol, setTimeForPrevSymbol]  = useState(0);

    const [currentSentence, setCurrentSentence]  = useState('');
    const [valueTextArea, setValueTextArea]  = useState('');
    const textareaRef = useRef();

    const updateKeyboardItems = ()=> {
        let index = keyboardItems.findIndex(item => {
            return item.code === activeCode;
        });
        if (index !== -1) setKeyboardItems((prev)=>{
            return [...prev.slice(0, index),
                    {value: keyboardItems[index].value,
                        id: keyboardItems[index].id,
                        type: keyboardItems[index].type,
                        size: keyboardItems[index].size,
                        isActive: true,
                        code: keyboardItems[index].code},
                ...prev.slice(index+1)]
        })
    }


    useEffect(()=>{
        focusTextArea();
        if (countCorrectSentences>0) {
            setNotifications((prev)=>{
                return [...prev, {error: countError!==0 && countCorrect!==0? ((countError/countCorrect)*100).toFixed(2): 0, speed: countCorrect!==0?(timeForSymbol/countCorrect).toFixed(0):0 , date: getCurrentDate()}]
            })
            setResults((prev)=>{
                return [...prev, {error: countError!==0 && countCorrect!==0? ((countError/countCorrect)*100).toFixed(2): 0, speed: countCorrect!==0?(timeForSymbol/countCorrect).toFixed(0):0 , date: getCurrentDate()}]
            })
            localStorage.setItem('notification', JSON.stringify(results));
        }
        setLoadSentence(true);
        setCountError(0);
        setTimeForPrevSymbol(0);
        setTimeForSymbol(0);
        setValueTextArea('');
        setCountCorrect(0);
        setCurrentPosition(0);
        fetch('https://lenad.site/jsongen/get.php')
            .then(response => response.json())
            .then((responseJson) => {
                let item = ".";
                while (item === ".") {
                    item = responseJson.result[Math.floor(Math.random()*responseJson.result.length)];
                }
                setCurrentSentence(item.trim().replace('«', '"').replace('»', '"').split(''));
                setTimeout(()=>{
                    setLoadSentence(false);
                }, 500);

            })
    },[countCorrectSentences])

    useEffect(()=>{
        updateKeyboardItems();
    },[activeCode])

    function isPressSymbol(val) {
        let arraySymbols = [8, 32, 219, 221, 187, 189, 186, 222, 190, 191, 188, 192]
        for (let i=48; i<=90; i++) {
            arraySymbols.push(i);
        }
        return arraySymbols.includes(val);
    }

    const getCurrentDate = ()=> {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        return mm + '.' + dd + '.' + yyyy;

    }

    const onKeyDownHandler = (e) => {
        setActiveCode(e.keyCode);
        if (isPressSymbol(e.keyCode))
        {
            if (e.keyCode == 8) {
                if (currentPosition == countCorrect)  {
                    e.preventDefault();
                }
                else {
                    setValueTextArea(e.target.value.slice(0,-1));
                    setCurrentPosition((prev)=> {
                        if (prev>0) return prev = prev - 1
                        else return 0;
                    });
                }
            } else {
                setCurrentPosition((prev)=> prev = prev + 1);
                if (e.key == currentSentence[currentPosition] && currentPosition<=countCorrect) {
                    setCountCorrect((prev)=> prev = prev + 1);
                    if (timeForPrevSymbol==0) {
                        let milliseconds = new Date().getTime();
                        setTimeForPrevSymbol(milliseconds);
                    } else {
                        setTimeForSymbol((prev)=> {
                            let milliseconds = new Date().getTime();
                            let time = milliseconds - timeForPrevSymbol;
                            return prev + time;
                        })
                        let milliseconds = new Date().getTime();
                        setTimeForPrevSymbol(milliseconds);
                    }
                } else {
                    setCountError((prev)=> prev = prev + 1);
                }
            }

        }

        if (e.keyCode == 13) {
            e.preventDefault();
            setCountCorrectSentences(prev => prev = prev +1);
        }
    }

    const textAreaChcngeHandler = (e) => {
        e.preventDefault();
        setValueTextArea(e.target.value);
    }

    const focusTextArea = () => {
        if (textareaRef.current!== undefined)
            textareaRef.current.focus();
    }

    const onKeyUpHandler = (e) => {
        setActiveCode(0);
        setKeyboardItems(keyboardItemsInfo);
    }
    const onClickHideHandler = (e) => {
        setShowTextArea((prev)=>{
            return !prev;
        })
        focusTextArea();
    }

    return (
        <BrowserRouter>
            <div className="container-content">
                <SideBar/>

                <Switch>
                    <Route path="/settings">
                        <div>

                        </div>
                    </Route>
                    <Route path="/" exact>
                        <div className="keyboard-page">
                            <div className="sentences-section">
                                <div className="sentence-container">
                                    <div className="btn-hide-textarea" onClick={onClickHideHandler}></div>
                                    <div className="sentence-content">
                                        {!loadSentence? currentSentence.map((item, index)=> {
                                            return <LetterItem key={index} isCorrect={index+1<=countCorrect} value={item}/>
                                        }): <div className="load-sentence"><div></div></div>}
                                    </div>
                                </div>
                                <div className={`textarea-container ${showTextArea?"":"textarea-container_hidden"}`}>
                                    <textarea ref={textareaRef} rows="1" onChange={textAreaChcngeHandler} value={valueTextArea} name="" onKeyDown={onKeyDownHandler} onKeyUp={onKeyUpHandler} id=""></textarea>
                                </div>
                            </div>
                            <div>
                                <Keyboard keyboardInfo={keyboardItems}/>
                            </div>
                            <div>
                                <ExerciseTool time={countCorrect!==0?timeForSymbol/countCorrect:0} errors={countError!==0 && countCorrect!==0? countError/countCorrect: 0}/>
                            </div>
                        </div>
                    </Route>
                    <Route path="/results">
                        <div>
                            <Results/>
                        </div>
                    </Route>
                </Switch>
            </div>
            <div className="modal-notification">
                {notifications.map((item, index)=>{
                    return <NoticeItem key={`notice-item-${index}`} error={item.error} speed={item.speed}/>
                })}
            </div>
        </BrowserRouter>

    );
}

export default App;
