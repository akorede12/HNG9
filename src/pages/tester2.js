import React from 'react'

import projectStyles from '.style.module.css'
import styles from './contactpageheader.module.css'

const Contactpageheader = (props) => {
  return (
    <div>
      <div className={styles['contactpageheader']}>
        <div className={styles['container1']}>
          <div className={styles['content']}>
            <div className={styles['content1']}>
              <div className={styles['headingandsupportingtext']}>
                <span
                  className={` ${styles['text']} ${projectStyles['displaymd-semibold']} `}
                >
                  <span>Contact Me</span>
                </span>
                <span
                  className={` ${styles['text02']} ${projectStyles['textxl-normal']} `}
                >
                  <span>
                    Hi there, contact me to ask me about anything you have in
                    mind.
                  </span>
                </span>
              </div>
              <div className={styles['form']}>
                <div className={styles['formfields']}>
                  <div className={styles['namerow']}>
                    <div className={styles['firstname']}>
                      <div className={styles['inputwithlabel']}>
                        <span
                          className={` ${styles['text04']} ${projectStyles['textsm-medium']} `}
                        >
                          <span>First name</span>
                        </span>
                        <div className={styles['input']}>
                          <div className={styles['content2']}>
                            <span
                              className={` ${styles['text06']} ${projectStyles['textmd-normal']} `}
                            >
                              <span>Enter your first name</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles['lastname']}>
                      <div className={styles['inputwithlabel1']}>
                        <span
                          className={` ${styles['text08']} ${projectStyles['textsm-medium']} `}
                        >
                          <span>Last name</span>
                        </span>
                        <div className={styles['input1']}>
                          <div className={styles['content3']}>
                            <span
                              className={` ${styles['text10']} ${projectStyles['textmd-normal']} `}
                            >
                              <span>Enter your last name</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles['email']}>
                    <div className={styles['inputwithlabel2']}>
                      <span
                        className={` ${styles['text12']} ${projectStyles['textsm-medium']} `}
                      >
                        <span>Email</span>
                      </span>
                      <div className={styles['input2']}>
                        <div className={styles['content4']}>
                          <span
                            className={` ${styles['text14']} ${projectStyles['textmd-normal']} `}
                          >
                            <span>yourname@email.com</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles['textareainputfield']}>
                    <div className={styles['inputwithlabel3']}>
                      <span
                        className={` ${styles['text16']} ${projectStyles['textsm-medium']} `}
                      >
                        <span>Message</span>
                      </span>
                      <input
                        type="text"
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        className={styles['input3']}
                      />
                    </div>
                  </div>
                  <div className={styles['checkbox']}>
                    <div className={styles['input4']}>
                      <div className={styles['frame-checkboxbase']}></div>
                    </div>
                    <div className={styles['textandsupportingtext']}>
                      <span
                        className={` ${styles['text18']} ${projectStyles['textmd-normal']} `}
                      >
                        <span>
                          You agree to providing your data to &#123;name&#125;
                          who may contact you.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles['btnsubmit']}>
                  <span
                    className={` ${styles['text20']} ${projectStyles['textmd-semibold']} `}
                  >
                    <span>Send message</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactpageheader