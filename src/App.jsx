import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(null)
  const [exchangeRate, setExchangeRate] = useState(null)

  useEffect(() => {
      const getExchangeRate = async () => {
          try{
              let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
              const response = await axios.get(url)
              //console.log(response)
              setExchangeRate(response.data.rates[toCurrency])
          } catch (error) {
              console.error("Error fetching exchange rate:", error);
          }
      }
      getExchangeRate()
  }, [fromCurrency, toCurrency])

  useEffect(() => {
      setConvertedAmount((amount * exchangeRate).toFixed(2))
  }, [amount, exchangeRate])

  const handleAmountChange = (e) => {
      const value = parseFloat(e.target.value)
      setAmount(isNaN(value) ? 0 : value)
  } 

  const handleFromCurrency = (e) => {
      setFromCurrency(e.target.value)
  }
  const handleToCurrency = (e) => {
      setToCurrency(e.target.value)
  }
return (
  <>
  <div className="currency-converter">
      <div className='box'></div>
      <div className='data'>
          <h1>Currency Converter</h1>
          <div className='input-container'>
              <label htmlFor='amt'>Amount:</label>
              <input type='number' id="amt" value={amount} onChange={handleAmountChange}></input>
          </div>
          <div className='input-container'>
              <label htmlFor='fromCurrency'>From Currency:</label>
              <select id="fromCurrency" value={fromCurrency} onChange={handleFromCurrency}>
                  <option value="AFN">AFN - Afghan Afghani</option>
                  <option value="DZD">DZD - Algerian Dinar</option>
                  <option value="ARS">ARS - Argentine Peso</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                  <option value="BRL">BRL - Brazilian Real</option>
                  <option value="BGN">BGN - Bulgarian Lev</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="CHF">CHF - Swiss Franc</option>
                  <option value="CLP">CLP - Chilean Peso</option>
                  <option value="CNY">CNY - Chinese Yuan (Renminbi)</option>
                  <option value="COP">COP - Colombian Peso</option>
                  <option value="CZK">CZK - Czech Koruna</option>
                  <option value="DKK">DKK - Danish Krone</option>
                  <option value="EGP">EGP - Egyptian Pound</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound Sterling</option>
                  <option value="HKD">HKD - Hong Kong Dollar</option>
                  <option value="HUF">HUF - Hungarian Forint</option>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="IDR">IDR - Indonesian Rupiah</option>
                  <option value="ILS">ILS - Israeli New Shekel</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="JOD">JOD - Jordanian Dinar</option>
                  <option value="KZT">KZT - Kazakhstani Tenge</option>
                  <option value="KES">KES - Kenyan Shilling</option>
                  <option value="KWD">KWD - Kuwaiti Dinar</option>
                  <option value="LBP">LBP - Lebanese Pound</option>
                  <option value="LYD">LYD - Libyan Dinar</option>
                  <option value="MOP">MOP - Macanese Pataca</option>
                  <option value="MYR">MYR - Malaysian Ringgit</option>
                  <option value="MXN">MXN - Mexican Peso</option>
                  <option value="MAD">MAD - Moroccan Dirham</option>
                  <option value="NGN">NGN - Nigerian Naira</option>
                  <option value="NOK">NOK - Norwegian Krone</option>
                  <option value="PKR">PKR - Pakistani Rupee</option>
                  <option value="PEN">PEN - Peruvian Nuevo Sol</option>
                  <option value="PLN">PLN - Polish Zloty</option>
                  <option value="QAR">QAR - Qatari Riyal</option>
                  <option value="RON">RON - Romanian Leu</option>
                  <option value="RUB">RUB - Russian Ruble</option>
                  <option value="SAR">SAR - Saudi Riyal</option>
                  <option value="SGD">SGD - Singapore Dollar</option>
                  <option value="ZAR">ZAR - South African Rand</option>
                  <option value="KRW">KRW - South Korean Won</option>
                  <option value="LKR">LKR - Sri Lankan Rupee</option>
                  <option value="SEK">SEK - Swedish Krona</option>
                  <option value="CHF">CHF - Swiss Franc</option>
                  <option value="TWD">TWD - Taiwan Dollar</option>
                  <option value="TZS">TZS - Tanzanian Shilling</option>
                  <option value="THB">THB - Thai Baht</option>
                  <option value="TTD">TTD - Trinidad and Tobago Dollar</option>
                  <option value="TRY">TRY - Turkish Lira</option>
                  <option value="AED">AED - United Arab Emirates Dirham</option>
                  <option value="USD">USD - U.S. Dollar</option>
                  <option value="VEF">VEF - Venezuelan Bolívar</option>
                  <option value="VND">VND - Vietnamese Đồng</option>
                  <option value="YER">YER - Yemeni Rial</option>
                  <option value="ZWL">ZWL - Zimbabwe Dollar</option>
              </select>
          </div>

          <div className='input-container'>
              <label htmlFor='toCurrency'>From Currency:</label>
              <select id="toCurrency" value={toCurrency} onChange={handleToCurrency}>
                  <option value="AFN">AFN - Afghan Afghani</option>
                  <option value="DZD">DZD - Algerian Dinar</option>
                  <option value="ARS">ARS - Argentine Peso</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                  <option value="BRL">BRL - Brazilian Real</option>
                  <option value="BGN">BGN - Bulgarian Lev</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="CHF">CHF - Swiss Franc</option>
                  <option value="CLP">CLP - Chilean Peso</option>
                  <option value="CNY">CNY - Chinese Yuan (Renminbi)</option>
                  <option value="COP">COP - Colombian Peso</option>
                  <option value="CZK">CZK - Czech Koruna</option>
                  <option value="DKK">DKK - Danish Krone</option>
                  <option value="EGP">EGP - Egyptian Pound</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound Sterling</option>
                  <option value="HKD">HKD - Hong Kong Dollar</option>
                  <option value="HUF">HUF - Hungarian Forint</option>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="IDR">IDR - Indonesian Rupiah</option>
                  <option value="ILS">ILS - Israeli New Shekel</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="JOD">JOD - Jordanian Dinar</option>
                  <option value="KZT">KZT - Kazakhstani Tenge</option>
                  <option value="KES">KES - Kenyan Shilling</option>
                  <option value="KWD">KWD - Kuwaiti Dinar</option>
                  <option value="LBP">LBP - Lebanese Pound</option>
                  <option value="LYD">LYD - Libyan Dinar</option>
                  <option value="MOP">MOP - Macanese Pataca</option>
                  <option value="MYR">MYR - Malaysian Ringgit</option>
                  <option value="MXN">MXN - Mexican Peso</option>
                  <option value="MAD">MAD - Moroccan Dirham</option>
                  <option value="NGN">NGN - Nigerian Naira</option>
                  <option value="NOK">NOK - Norwegian Krone</option>
                  <option value="PKR">PKR - Pakistani Rupee</option>
                  <option value="PEN">PEN - Peruvian Nuevo Sol</option>
                  <option value="PLN">PLN - Polish Zloty</option>
                  <option value="QAR">QAR - Qatari Riyal</option>
                  <option value="RON">RON - Romanian Leu</option>
                  <option value="RUB">RUB - Russian Ruble</option>
                  <option value="SAR">SAR - Saudi Riyal</option>
                  <option value="SGD">SGD - Singapore Dollar</option>
                  <option value="ZAR">ZAR - South African Rand</option>
                  <option value="KRW">KRW - South Korean Won</option>
                  <option value="LKR">LKR - Sri Lankan Rupee</option>
                  <option value="SEK">SEK - Swedish Krona</option>
                  <option value="CHF">CHF - Swiss Franc</option>
                  <option value="TWD">TWD - Taiwan Dollar</option>
                  <option value="TZS">TZS - Tanzanian Shilling</option>
                  <option value="THB">THB - Thai Baht</option>
                  <option value="TTD">TTD - Trinidad and Tobago Dollar</option>
                  <option value="TRY">TRY - Turkish Lira</option>
                  <option value="AED">AED - United Arab Emirates Dirham</option>
                  <option value="USD">USD - U.S. Dollar</option>
                  <option value="VEF">VEF - Venezuelan Bolívar</option>
                  <option value="VND">VND - Vietnamese Đồng</option>
                  <option value="YER">YER - Yemeni Rial</option>
                  <option value="ZWL">ZWL - Zimbabwe Dollar</option>
              </select>
          </div>
          <div className='result'>
          <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency} </p>
          </div>
         
      </div>
  </div>
  </>
)
}

export default App
