import React, { useState } from 'react';
import s from './stylePokeInfoModal.module.css'
import { Modal, Progress } from 'antd';


export default function PokeInfoModal({ pName, pType, TYPE_COLORS, pImg, PokeAbilities, PokeHeight, PokeBaseStats, PokeStatsName}){
  
  const [visible, setvisible] = useState(true)

  function handleCancel(){
    setvisible(false)
  }
  return(
    <Modal
      width={700}
      title={pName}
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      style={{
        fontFamily:'Ranchers, cursive',
        fontSize:'40px'
      }}
    >
      <div className={s.content}>
        <div className={ s.imgAndStats }>
          <div className={s.imgDiv}>
            <img src={pImg} style={{height:`219px`}}/>
          </div>
          <div className={s.statsDiv}>
            <div>
              <Progress
                trailColor='violet'
                strokeLinecap="square" type="dashboard"
                percent={PokeHeight*2} format={percent => `${PokeHeight/10} m`}
                status={"normal"}
              />
              </div>
                <div className={s.div_stats}>
                  <div className={s.stn}>
                    {PokeStatsName.map(psn=>(
                      <p style={{fontSize:'13px', margin:'0'}}>
                        {psn}
                      </p>
                    ))
                    }
                  </div>
                  <div>
                    {PokeBaseStats.map(pbs=>(
                    <Progress 
                      trailColor='violet'
                      percent={pbs/2} format={percent => `${pbs}`}
                      status={"normal"}
                    />
                    ))
                    }
                  </div>
                </div>
          </div>
        </div>
        <div>
              {pType.map(pot => (
                <p className={s.p_type} style={{background: `#${TYPE_COLORS[pot]}`}}>
                  {pot}
                </p>
              ))}
        </div> 
      </div>
  </Modal>
  );
}

