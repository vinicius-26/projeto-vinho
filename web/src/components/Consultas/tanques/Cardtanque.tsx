import React, { useState } from 'react';
import { ModalUva } from './ModalUva';
import Image from 'next/image'

import styles from '../../../styles/components/Consultas/Tanques/CardTanque.module.css'

import imgTank from '../../../../public/img/tank.png'
import imgPlus from '../../../../public/img/plus.png'
import imgCheck from '../../../../public/img/check.png'
import imgDelete from '../../../../public/img/delete.png'

const CardTanque: React.FC = () =>{
    const [isModalVisible, setIsModalVisible]= useState(false);
    
    return(
        <div className={styles.container}>
            <div className={styles.content}>

        {isModalVisible ? (
        <ModalUva onClose={() => setIsModalVisible(false)}/>) : null}
        
                <main>
                                
                    <section>   
                        <div className={styles.imgsCard}>
                            <p>Tanque 01</p>
                            <Image width={300} height={300} src={imgTank} alt="Imagem tanque" objectFit="contain"/>

                            <div className={styles.imgPlus}>
                                <button className={styles.buttonOpenModal} onClick={() => setIsModalVisible(true)}> <Image width={300} height={300} src={imgPlus} alt="Imagem tanque" objectFit="contain"/> </button>
                                
                            </div>
                        </div> 
                    
                        <div className={styles.valoresTanques}>    
                            <div className={styles.labelCard}>
                                <label htmlFor="">Produtor:</label>
                                <label htmlFor="">Capacidade:</label>
                                <label htmlFor="">Ocupação:</label>
                                <label htmlFor="">Data entrada:</label>
                                <label htmlFor="">Vinho atual:</label>
                                <label htmlFor="">Tempo: </label>
                                <label htmlFor="">Status:</label>
                            </div>

                            <div className={styles.valores}>
                                <label id="label-produtor" htmlFor="">Produtor_01</label>
                                <label htmlFor="">5000L</label>
                                <label htmlFor="">60%</label>
                                <label htmlFor="">05/10/2021</label>
                                <label htmlFor="">Vinho Caberne</label>
                                <label htmlFor="">00:00:00</label>
                                <div className={styles.imgStatus}>
                                    <label htmlFor=""><Image width={300} height={300} src={imgCheck} alt="Imagem check" objectFit="contain"/></label>  
                                </div>
                            </div>
                        </div>

                        <div className={styles.buttonRetirar}>
                            <button className={styles.buttonRetirarUva}>Retirar uva</button>
                        </div>
                    </section> 

                    <section>   
                        <div className={styles.imgsCard}>
                            <p>Tanque 02</p>
                            <Image width={300} height={300} src={imgTank} alt="Imagem tanque" objectFit="contain"/>

                            <div className={styles.imgPlus}>
                                <button className={styles.buttonOpenModal} onClick={() => setIsModalVisible(true)}> <Image width={300} height={300} src={imgPlus} alt="Imagem tanque" objectFit="contain"/> </button>
                            </div>
                        </div> 
                    
                        <div className={styles.valoresTanques}>    
                            <div className={styles.labelCard}>
                                <label htmlFor="">Produtor:</label>
                                <label htmlFor="">Capacidade:</label>
                                <label htmlFor="">Ocupação:</label>
                                <label htmlFor="">Data entrada:</label>
                                <label htmlFor="">Vinho atual:</label>
                                <label htmlFor="">Tempo: </label>
                                <label htmlFor="">Status:</label>
                            </div>

                            <div className={styles.valores}>
                                <label id="label-produtor" htmlFor="">Produtor_02</label>
                                <label htmlFor="">4000L</label>
                                <label htmlFor="">90%</label>
                                <label htmlFor="">05/10/2021</label>
                                <label htmlFor="">Vinho Mellot</label>
                                <label htmlFor="">00:00:00</label>
                                <div className={styles.imgStatus}>
                                    <label htmlFor=""><Image width={300} height={300} src={imgCheck} alt="Imagem check" objectFit="contain"/></label>  
                                </div>
                            </div>
                        </div>

                        <div className={styles.buttonRetirar}>
                            <button className={styles.buttonRetirarUva}>Retirar uva</button>
                        </div>
                    </section>

                    <section>   
                        <div className={styles.imgsCard}>
                            <p>Tanque 03</p>
                            <Image width={300} height={300} src={imgTank} alt="Imagem tanque" objectFit="contain"/>

                            <div className={styles.imgPlus}>
                                <button className={styles.buttonOpenModal} onClick={() => setIsModalVisible(true)}> <Image width={300} height={300} src={imgPlus} alt="Imagem tanque" objectFit="contain"/> </button>
                            </div>
                        </div> 
                    
                        <div className={styles.valoresTanques}>    
                            <div className={styles.labelCard}>
                                <label htmlFor="">Produtor:</label>
                                <label htmlFor="">Capacidade:</label>
                                <label htmlFor="">Ocupação:</label>
                                <label htmlFor="">Data entrada:</label>
                                <label htmlFor="">Vinho atual:</label>
                                <label htmlFor="">Tempo: </label>
                                <label htmlFor="">Status:</label>
                            </div>

                            <div className={styles.valores}>
                                <label id="label-produtor" htmlFor="">Produtor_03</label>
                                <label htmlFor="">2000L</label>
                                <label htmlFor="">10%</label>
                                <label htmlFor="">05/10/2021</label>
                                <label htmlFor="">Vinho Souvignon</label>
                                <label htmlFor="">00:00:00</label>
                                <div className={styles.imgStatus}>
                                    <label htmlFor=""><Image width={300} height={300} src={imgCheck} alt="Imagem check" objectFit="contain"/></label>  
                                </div>
                            </div>
                        </div>

                        <div className={styles.buttonRetirar}>
                            <button className={styles.buttonRetirarUva}>Retirar uva</button>
                        </div>
                    </section>

                    <section>   
                        <div className={styles.imgsCard}>
                            <p>Tanque 04</p>
                            <Image width={300} height={300} src={imgTank} alt="Imagem tanque" objectFit="contain"/>

                            <div className={styles.imgPlus}>
                                <button className={styles.buttonOpenModal} onClick={() => setIsModalVisible(true)}> <Image width={300} height={300} src={imgPlus} alt="Imagem tanque" objectFit="contain"/> </button>
                            </div>
                        </div> 
                    
                        <div className={styles.valoresTanques}>    
                            <div className={styles.labelCard}>
                                <label htmlFor="">Produtor:</label>
                                <label htmlFor="">Capacidade:</label>
                                <label htmlFor="">Ocupação:</label>
                                <label htmlFor="">Data entrada:</label>
                                <label htmlFor="">Vinho atual:</label>
                                <label htmlFor="">Tempo: </label>
                                <label htmlFor="">Status:</label>
                            </div>

                            <div className={styles.valores}>
                                <label id="label-produtor" htmlFor="">Produtor_04</label>
                                <label htmlFor="">10000L</label>
                                <label htmlFor="">50%</label>
                                <label htmlFor="">05/10/2021</label>
                                <label htmlFor="">Vinho Bourgnon</label>
                                <label htmlFor="">00:00:00</label>
                                <div className={styles.imgStatus}>
                                    <label htmlFor=""><Image width={300} height={300} src={imgCheck} alt="Imagem check" objectFit="contain"/></label>  
                                </div>
                            </div>
                        </div>

                        <div className={styles.buttonRetirar}>
                            <button className={styles.buttonRetirarUva}>Retirar uva</button>
                        </div>
                    </section>

                    <section>   
                        <div className={styles.imgsCard}>
                            <p>Tanque 05</p>
                            <Image width={300} height={300} src={imgTank} alt="Imagem tanque" objectFit="contain"/>

                            <div className={styles.imgPlus}>
                                <button className={styles.buttonOpenModal} onClick={() => setIsModalVisible(true)}> <Image width={300} height={300} src={imgPlus} alt="Imagem tanque" objectFit="contain"/> </button>
                            </div>
                        </div> 
                    
                        <div className={styles.valoresTanques}>    
                            <div className={styles.labelCard}>
                                <label htmlFor="">Produtor:</label>
                                <label htmlFor="">Capacidade:</label>
                                <label htmlFor="">Ocupação:</label>
                                <label htmlFor="">Data entrada:</label>
                                <label htmlFor="">Vinho atual:</label>
                                <label htmlFor="">Tempo: </label>
                                <label htmlFor="">Status:</label>
                            </div>

                            <div className={styles.valores}>
                                <label id="label-produtor" htmlFor="">Produtor_05</label>
                                <label htmlFor="">3000L</label>
                                <label htmlFor="">30%</label>
                                <label htmlFor="">05/10/2021</label>
                                <label htmlFor="">Vinho Bordo</label>
                                <label htmlFor="">00:00:00</label>
                                <div className={styles.imgStatus}>
                                    <label htmlFor=""><Image width={300} height={300} src={imgCheck} alt="Imagem check" objectFit="contain"/></label>  
                                </div>
                            </div>
                        </div>

                        <div className={styles.buttonRetirar}>
                            <button className={styles.buttonRetirarUva}>Retirar uva</button>
                        </div>
                    </section>

                    
                </main>       
            </div>
        </div>
    )
}

export default CardTanque;
