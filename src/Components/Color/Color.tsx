import React, {useEffect, useState} from "react";
import './Color.css'


const getColorGradient = (el: any): string => `${el.color} ${el.value}%,`;
const getColorsString = (items: any, deg: string) => items.reduce((acc: string, elem: any, index: number) => {
    if (index === items.length - 1) {
        let stringN = getColorGradient(elem);
        acc = `${acc}${stringN.substring(0, stringN.length - 1)})`;
    } else {
        acc = acc + getColorGradient(elem);
    }
    return acc;
}, `linear-gradient(${deg}deg,`);


const Color: React.FC = () => {
    const [styles, setStyles] = useState({
        div: {
            width: '400px',
            height: '100px',
            margin: '10px',
            background: ''
        }
    });

    let [color, setColor] = useState('#333333');
    let [deg, setDeg] = useState('90');
    let [inputMass, setInputMass] = useState([
        {color: '#240000', value: -12, id: 0},
        {color: '#777777', value: 30, id: 1},
        {color: '#CD00CD', value: 60, id: 2},
        {color: '#0000FF', value: 80, id: 3},
        {color: '#7FFF00', value: 112, id: 4}]
    );

    useEffect(() => {
        inputMass.forEach( (el:any, i:number, array:any)=>{
            if(el.value === 125){
                debugger
                el.value = el.value + 1;
                setInputMass([{...el, value: -20},  ...inputMass.filter( (input:any)=> {
                    return input.value < 135
                })])
            }
        });

        setStyles(
            {
                ...styles,
                div: {
                    ...styles.div,
                    background: getColorsString(inputMass, deg)
                }
            }
        );
    }, [inputMass, deg]);


    const changeColor = (e: React.FormEvent<HTMLInputElement>) => {
        setColor(e.currentTarget.value)
    };
    const changeDeg = (e: React.FormEvent<HTMLInputElement>) => {
        setDeg(e.currentTarget.value)
    };


    const deleteInputElement = (id: number) => {
        setInputMass(inputMass.filter((el: any) => {
            return el.id !== id
        }));
    };

    const addInputElement = () => {
        setInputMass(
            [
                ...inputMass,
                {
                    ...inputMass[inputMass.length - 1],
                    id: inputMass[inputMass.length - 1].id + 1
                }
            ]
        )
    };

    const changeColorForGradient = (e: React.FormEvent<HTMLInputElement>, id: number) => {
        let newArray: any = inputMass.map(el => {
            if (el.id === id) {
                return {...el, color: e.currentTarget.value}
            } else {
                return el
            }
        });
        setInputMass(newArray)
    };
    const changeValueForGradient = (e: React.FormEvent<HTMLInputElement>, id: number) => {
        let newArray: any = inputMass.map(el => {
            if (el.id === id) {
                return {...el, value: e.currentTarget.value}
            } else {
                return el
            }
        });
        setInputMass(newArray)
    };

    const setValues = () => {
        let i = 12;
        const interval = setInterval(() => {
            setInputMass(prevState => prevState.map(el => {
                return {
                    ...el,
                    value: el.value + 1
                }
            }));
            i--;
        }, 100);
        if (i === 0) {
            clearInterval(interval);
        }
    };

    return (
        <div className='colorContainer'>
            <h1>Chose color</h1>
            <input type="color" onChange={changeColor} value={color}/>
            <div className='choseColor' style={{backgroundColor: color}}/>
            <div style={styles.div}/>
            <button onClick={setValues}>Start</button>
            <input type="number" value={deg} onChange={changeDeg}/>
            {inputMass.map((c: any, i) => {
                return (
                    <div key={i}>
                        <input type="color" value={c.color} onChange={(e) => changeColorForGradient(e, c.id)}/>
                        <input type="number" value={c.value} onChange={(e) => changeValueForGradient(e, c.id)}/>
                        <button onClick={() => deleteInputElement(c.id)}>delete</button>
                    </div>)
            })}
            <button onClick={addInputElement}>ADD</button>
        </div>
    );
};

export default Color;
