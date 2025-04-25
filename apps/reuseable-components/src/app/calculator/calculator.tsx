import React, { useState } from 'react'

export const Calculator: React.FC = () => {
    const [expression, setExpression] = useState('')
    const [result, setResult] = useState<number | null>(null)
    const [showResult, setShowResult] = useState(false)

    function clear() {
        setExpression('')
        setResult(null)
        setShowResult(false)
    }

    function plus() {
        setExpression((prevState) => `${prevState}+`)
        setShowResult(false)
        // setResult(null)
    }

    function minus() {
        setExpression((prevState) => `${prevState}-`)
        setShowResult(false)
        // setResult(null)
    }

    function addNumber(number: number) {
        setExpression((prevState) => `${prevState}${number}`)
        setShowResult(false)
        // setResult(null)
    }

    function times() {
        setExpression((prevState) => `${prevState}&#215;`)
        setShowResult(false)
        // setResult(null)
    }

    function divide() {
        setExpression((prevState) => `${prevState}&#247;`)
        setShowResult(false)
        // setResult(null)
    }

    function equals() {
        if(expression === '') {
            setResult(0)
        }

        const hasSymbols = ['+', '-', '&#215;', '&#247;'].some((symbol) => expression.includes(symbol))
        if(!hasSymbols) {
            setResult(Number(expression))
        }


        setShowResult(true)
    }

    return (
        <div>
            <div>
                <div>{expression}</div>
                {showResult ? <div>Total: {result}</div> : null}
            </div>
            <section className="grid grid-cols-4 gap-2">
                <div>
                    <button onClick={() => clear()}>
                        C
                    </button>
                    <button onClick={() => plus()}>
                        +
                    </button>
                    <button onClick={() => minus()}>
                        -
                    </button>
                </div>

                <div>
                    <button onClick={() => addNumber(1)}>
                        1
                    </button>
                    <button onClick={() => addNumber(2)}>
                        2
                    </button>
                    <button onClick={() => addNumber(3)}>
                        3
                    </button>
                </div>

                <div>
                    <button onClick={() => addNumber(4)}>
                        4
                    </button>
                    <button onClick={() => addNumber(5)}>
                        5
                    </button>
                    <button onClick={() => addNumber(6)}>
                        6
                    </button>
                </div>

                <div>
                    <button onClick={() => addNumber(7)}>
                        7
                    </button>
                    <button onClick={() => addNumber(8)}>
                        8
                    </button>
                    <button onClick={() => addNumber(9)}>
                        9
                    </button>
                </div>

                <div>
                    <button onClick={() => times()}>
                        &#215;
                    </button>
                    <button onClick={() => divide()}>
                        &#247;
                    </button>
                    <button onClick={() => equals()}>
                        &#61;
                    </button>
                </div>

            </section>
        </div>
    )
}
