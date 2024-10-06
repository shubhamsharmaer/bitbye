import { useEffect, useState } from 'react'
import React, { useRef } from 'react';
import { getMarketRates } from '../services/getMarketRates';
import { convertRate } from '../services/convertRate';
import logo from './assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faClose, faCircleArrowRight, faCircleArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {  faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import arrow from './assets/arrow.svg'
import loop from './assets/loop.svg'
import clock from './assets/clock.svg'
import down from './assets/down.svg'


function App() {
    const[rates, setRates] = useState([]);
    const[error, setError] = useState(null);
    const [convertedRate, setConvertedRate] = useState(null);
    const [amount, setAmount] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // state to control dropdown visibility
    const [loading, setLoading] = useState(false);

    const currencies = ['USD', 'EUR', 'CZK', 'CHF', 'AUD', 'CAD'];
    // handling market rates
    useEffect(() => {
      const fetchMarketRates = async () => {
        try {
          const marketRates = await getMarketRates();
          const selectRates = currencies.map(currency => ({
            currency,
            rate: marketRates[currency] ? marketRates[currency]['15m'] : 'N/A',
          }));
          setRates(selectRates);
        } catch (err) {
          setError(err.message);
        }
      };
      
      
      fetchMarketRates();
    }, []); 

    // handle form submission
    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();
      if(!amount || !isFinite(amount)){
        setError('Please enter a valid amount');
        return;
      }
      try{
        const convertedRate = await convertRate(amount, selectedCurrency);
        setLoading(false);
        setConvertedRate(convertedRate);
      } catch(error){
        console.error('Error while converting rates', error);
        throw error;
      }
    }

    const handleCurrencyChange = (currency) => {
      setSelectedCurrency(currency);
      setIsDropdownVisible(false); // Hide dropdown after selection
      setLoading(false);
      setConvertedRate(null);
    };

    const handleDropdownToggle = (e) => {
        // stop loading
        setLoading(false);
        e.stopPropagation();
        setIsDropdownVisible(!isDropdownVisible); // Toggle dropdown visibility
        // setConvertedRate(null);
    };

    const navDialogRef = useRef(null); 
    const handleMenu = () => {
        if (navDialogRef.current) {
            navDialogRef.current.classList.toggle('hidden');
        }
    };
  return (
    <>
      <div id="wrap" className='h-screen bg-gradient-to-b from-[#f9fcff] to-[#f8f9fd]'>

        <div id="navbar" className='flex justify-between items-center container mt-0'>
          <div id="logo" className='flex items-center gap-2'>
            <img className='h-5 object-cover' src={logo} alt="" />
            <span className='font-display text-2xl text-[#060607] font-medium'>bitbye</span>
          </div>
          <div id="nav-links" className='hidden nav-items lg:flex lg:items-center gap-10 font-display font-medium'>
          <div className="group flex flex-col justify-center overflow-hidden items-center">
                  <a className='text-center' target='_blank' href="https://dribbble.com/shots/23968289-Hero-Exploration">UI Design by</a>
                  <div id="color" className='-translate-x-28  group-hover:translate-x-0 transition-all delay-100 rounded-lg w-full h-[1px] bg-[#293ef9]'></div>
          </div>
          <div className="group flex flex-col justify-center overflow-hidden items-center">
                  <a className='text-center' target='_blank' href="https://www.linkedin.com/in/shubhamsharmaer/">Connect now</a>
                  <div id="color" className='-translate-x-28  group-hover:translate-x-0 transition-all delay-100 rounded-lg w-full h-[1px] bg-[#293ef9]'></div>
          </div>
          <div className="group flex flex-col justify-center overflow-hidden items-center">
                  <a className='text-center' target='_blank' href="https://github.com/shubhamsharmaer/bitbye">Source Code</a>
                  <div id="color" className='-translate-x-28  group-hover:translate-x-0 transition-all delay-100 rounded-lg w-full h-[1px] bg-[#293ef9]'></div>
          </div>
        
          </div>

          <button 
                    className='p-2 lg:hidden'
                    onClick={handleMenu}
                >
                    <FontAwesomeIcon className='text-grey-600 text-lg' icon={faBarsStaggered} />
                </button>
        </div>

        <div ref={navDialogRef} className="fixed z-20 h-screen container mt-0 inset-0  bg-white hidden">
          <div className="flex justify-between">
              <div id="logo" className='flex items-center gap-2'>
                <img className='h-5' src={logo} alt="" />
                <span className='font-display text-2xl text-[#060607] font-medium'>bitbye</span>
              </div>

              <button 
                className='p-2 lg:hidden'
                onClick={handleMenu}
                >
                  <FontAwesomeIcon className='text-grey-600 text-xl' icon={faClose} />
              </button>
          </div>
          <div className="h-2/3 w-full flex flex-col justify-center items-center">
              <div className="flex w-full flex-col border p-6 rounded-xl gap-4 text-xl mt-6">
                <div className="flex justify-between items-center">
                  <a className='text-left' target='_blank' href="https://dribbble.com/shots/23968289-Hero-Exploration">UI Design by</a>
                  <div id="color" className='w-1/2 rounded-lg h-4 bg-[#293ef9]'></div>
                </div>
              </div>
              <div className="flex w-full flex-col border p-6 rounded-xl gap-4 text-xl mt-6">
              <div className="flex justify-between items-center">
                <div id="color" className='w-1/2 rounded-lg h-4 bg-[#69f3fd]'></div>
                <a className='text-right' target='_blank' href="https://www.linkedin.com/in/shubhamsharmaer/">Connect now</a>
                </div>
              </div>
              <div className="flex w-full flex-col border p-6 rounded-xl gap-4 text-xl mt-6">
                <div className="flex justify-between items-center">
                  <a className='text-left' target='_blank' href="https://github.com/shubhamsharmaer/bitbye">Source Code</a>
                  <div id="color" className='w-1/2 rounded-lg h-4 bg-[#1c1c1c]'></div>
                </div>
              </div>
          </div>
          
        </div>


        <div id='hero' className="container mt-4">
          <div className="grid grid-rows-1 md:grid-cols-2 gap-14 md:gap-0 items-center justify-center">
                <div id="headline" className="flex items-center justify-center">
                <div id="blur" className='z-[0] hidden md:inline-block relative w-40 h-40 top-30 left-60 rounded-full blur-[80px] bg-[#69f3fd]'></div>
                  <div id="blur" className='z-[0] hidden md:inline-block relative w-40 h-40 top-36 left-60 rounded-full blur-[80px] bg-[#69f3fd]'></div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium">Cash out Bitcoin, the easy way</h1>
                </div>

                <div id="features" className="flex md:justify-center md:items-center">
                  <div className="flex flex-col gap-4">
                    <p className='text-sm lg:text-lg font-display'><FontAwesomeIcon className='text-green-500' icon={faCheckCircle} /> Traded over 20K BTC since 2014</p>
                    <p className='text-sm lg:text-lg font-display'><FontAwesomeIcon className='text-green-500' icon={faCheckCircle} /> Fully licensed and regulated by the FCIS</p>
                    <p className='text-sm lg:text-lg font-display'><FontAwesomeIcon className='text-green-500' icon={faCheckCircle} /> ID verification takes minutes, not days</p>
                    <p className='text-sm lg:text-lg font-display'><FontAwesomeIcon className='text-green-500' icon={faCheckCircle} /> Specialists in buying BTC, with no limits</p>
                  </div>
                </div>
          </div>

        </div>

        <div id="converter" className='container mt-0'>
            <div className="flex justify-center bg-white rounded-xl border-none drop-shadow-lg">
              <form onSubmit={handleSubmit} action="" className='flex flex-col items-center p-6 lg:flex-row gap-6 md:gap-4'>
                  <div id="sell" className='flex flex-col p-6 justify-center items-start gap-4'>
                    <h3 className='text-[#7c859a] text-lg'>You sell</h3>

                    <div className="flex flex-col gap-4">
                    
                    <div className="flex justify-between">
                        <input type="number"
                          required
                          value={amount} 
                          onChange={(e) => setAmount(e.target.value)} 
                          className='focus:appearance-none border-b text-2xl bg-transparent w-4/5 focus:outline-none'
                        />
                        <span className='text-[#7c859a] text-2xl'>BTC</span>
                    </div>

                    <div id="sub-line" className='flex items-center gap-2'>
                      <img className='h-5' src={loop} alt="" />
                      <p className='font-display text-sm font-medium text-[#525e7a]'>Rates refreshed in every 15 minutes</p>
                    </div>

                    </div>
                  </div>

                  <div id="sign" className='flex justify-center items-center'>
                    {loading ? 
                    <FontAwesomeIcon className='h-8 md:h-10 text-[#040404] animate-spin' icon={faSpinner} />
                    :
                    <FontAwesomeIcon className='h-8 md:h-10 text-[#040404]' icon={faCircleArrowRight} />
                    }
                  </div>

                  <div id="got" className='flex flex-col p-6 justify-center items-start gap-4'>
                    <h3 className='text-[#7c859a] text-lg'>You got</h3>

                    <div className="flex flex-col gap-4">
                    
                    <div className="flex justify-between">
                        <input type="text text-[#040404]"
                          value={convertedRate || ''} 
                          readOnly
                          className='border-b text-2xl bg-transparent w-4/5 focus:outline-none'
                        />
                        <span className='text-[#7c859a] text-2xl'>

                        <button
                              type='button'
                              onClick={handleDropdownToggle}
                              className='flex items-center'
                            >
                                {selectedCurrency}
                                <img src={down} alt="" />
                          </button>

                        </span>
                    </div>

                    {isDropdownVisible && (
                                        <div className="absolute px-3 py-2 top-16 right-16 md:top-80 md:right-24 lg:top-32 lg:right-[240px] bg-white border border-gray-300 rounded-lg shadow-lg">
                                            <ul className="flex flex-col">
                                                {currencies.map(currency => (
                                                    <li
                                                        key={currency}
                                                        className="p-2 hover:bg-gray-100 rounded-xl cursor-pointer"
                                                        onClick={() => handleCurrencyChange(currency)}
                                                    >
                                                        {currency}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                              )}

                    <div id="sub-line" className='flex items-center gap-2'>
                      <img className='h-5' src={clock} alt="" />
                      <p className='font-display text-sm font-medium text-[#525e7a]'>Arives by: Tomorrow</p>
                    </div>

                    </div>
                    
                  </div>

                  <div id="btn" className='flex justify-center items-center'>
                    <input type="submit" className="cursor-pointer border border-none bg-[#293ef9] text-white font-semibold rounded-lg px-6 py-3 transition-transform duration-300 ease-in-out active:bg-[#36f0fc]" value="Convert" />
                  </div>
              </form>
            </div>
        </div>

        <div id="updates" className='container mt-0 justify-center items-center'>
          <div id="list" className='flex  justify-center items-center'>
            <ul className='flex md:justify-center gap-16 flex-wrap lg:gap-[4rem] md:gap-14 font-body'>
              {error ? <li className='font-medium text-[#7c859a] text-center'>{error}</li> : (rates.map((item) => (
              <li key={item.currency} className='font-medium flex flex-col justify-center items-center text-[#7c859a] text-center'>BTC / {item.currency} <br /> <span className='text-[#0d0d0e]'>{item.rate || 'N/A'}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" className='inline text-green-500 ml-1' viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </span></li>
              ))
              )}
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
