import xxpayIMG from '../assets/xxpay.png'
import React, { useState } from "react";
import '../styles.css'

export default function TelaPrincipal() {

  const [venda, setVenda] = useState('')
  const [taxa, setTaxa] = useState('')

  function onSubmit(e) { // RECEBE OS VALORES DOS INPUTS

    var numParcela
    var valorLiquido
    var valorTaxaFinal
    var valorRepasse
    var valorParcela
    var valorTaxa = document.getElementById('taxa').value
    var selectParcela = document.getElementById('parcelas')
    var valueParcela = selectParcela.options[selectParcela.selectedIndex].value

    // CALCULO DO VALOR 
    valorTaxaFinal = 1 - (valorTaxa / 100)
    valorLiquido = (parseFloat(venda) - (parseFloat(venda) - (valorTaxaFinal * venda)))
    valorRepasse = (parseFloat(venda) / valorTaxaFinal)

    // FUNCAO CADA PARCELA
    if (valueParcela === 'debito' || valueParcela === 'credito') {
      valorParcela = valorRepasse
      numParcela = 'Débito / Crédito'
    } else if (valueParcela === '2x') {
      valorParcela = valorRepasse / 2
      numParcela = '2'
    } else if (valueParcela === '3x') {
      valorParcela = valorRepasse / 3
      numParcela = '3'
    } else if (valueParcela === '4x') {
      valorParcela = valorRepasse / 4
      numParcela = '4'
    } else if (valueParcela === '5x') {
      valorParcela = valorRepasse / 5
      numParcela = '5'
    } else if (valueParcela === '6x') {
      valorParcela = valorRepasse / 6
      numParcela = '6'
    } else if (valueParcela === '7x') {
      valorParcela = valorRepasse / 7
      numParcela = '7'
    } else if (valueParcela === '8x') {
      valorParcela = valorRepasse / 8
      numParcela = '8'
    } else if (valueParcela === '9x') {
      valorParcela = valorRepasse / 9
      numParcela = '9'
    } else if (valueParcela === '10x') {
      valorParcela = valorRepasse / 10
      numParcela = '10'
    } else if (valueParcela === '11x') {
      valorParcela = valorRepasse / 11
      numParcela = '11'
    } else {
      valorParcela = valorRepasse / 12
      numParcela = '12'
    }

    // MOSTRA DADOS
    alert("Valor líquido: R$ " + valorLiquido.toFixed(2) + "\nValor a repassar: R$ " + valorRepasse.toFixed(2) + "\nTaxa: " + valorTaxa + "%" + 
    "\nValor de cada parcela: R$ " + valorParcela.toFixed(2) + "\nNúmero de parcelas: " + numParcela)
  }

  return (

    <div className="container">
      <div className="container-venda">
        <div className="wrap-venda">
          <form className="venda-form">

            <span className='venda-form-title'>
              Simulador de vendas
            </span>

            <span className="venda-form-title">
              <img src={xxpayIMG} alt="XXPAY"></img>
            </span>

            <div className='wrap-input'>
              <input
                className={venda !== "" ? 'has-val input' : 'input'}
                type="number"
                value={venda}
                onChange={(e) => setVenda(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Valor da venda'></span>
            </div>

            <div className='wrap-input'>
              <input
                className={taxa !== "" ? 'has-val input' : 'input'}
                type="number"
                id='taxa'
                value={taxa}
                onChange={(e) => setTaxa(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Taxa (%)'></span>
            </div>

            <div className='wrap-input'>
              <select className="input" id='parcelas'>
                <option value="debito">Débito</option>
                <option value='credito'>Crédito à vista</option>
                <option value='2x'>2x</option>
                <option value='3x'>3x</option>
                <option value='4x'>4x</option>
                <option value='5x'>5x</option>
                <option value='6x'>6x</option>
                <option value='7x'>7x</option>
                <option value='8x'>8x</option>
                <option value='9x'>9x</option>
                <option value='10x'>10x</option>
                <option value='11x'>11x</option>
                <option value='12x'>12x</option>
              </select>
            </div>

            <div className='container-calcular-form-btn'>
              <button
                className='calcular-form-btn'
                type='button'
                onClick={() => {
                  onSubmit()
                  setTaxa('')
                  setVenda('')
                }}
              >Calcular</button>
            </div>

            <span className='span-taxas'>
              Não lembro <a href='https://xxpay.muxipay.net/#/merchant_fee' target="_blank" aria-label='portal' rel="noreferrer">minhas taxas!</a>
            </span>

          </form>

        </div>
      </div>
    </div>

  )
}
