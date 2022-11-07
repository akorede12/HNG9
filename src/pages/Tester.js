import React from 'react'

// import projectStyles from '.style.module.css'
import projectStyles from './tester.css'
//import styles from './stage1task.module.css'
import styles from './tester.css'

const Tester = (props) => {
  return (
    <div>
      <div className='stage1task'>
        <div className='main-section'>
          <div className='content'>
            <div className='profile-section'>
              <div className='profileimg'></div>
              <div className='twitter'>
                <span
                  className={` ${styles['text']} ${projectStyles['textxl-bold']} `}
                >
                  <span>Annette Black</span>
                </span>
              </div>
              <button className={styles['frame-avatarsharebutton']}>
                <div className={styles['content1']}>
                  <img
                    src="/playground_assets/share06i3681-wvlc.svg"
                    alt="share06I3681"
                    className={styles['share06']}
                  />
                </div>
              </button>
            </div>
            <div className={styles['link-section']}>
              <div className={styles['links']}>
                <div className={styles['frame5']}>
                  <span
                    className={` ${styles['text02']} ${projectStyles['textlg-medium']} `}
                  >
                    <span>Twitter Link</span>
                  </span>
                </div>
              </div>
              <div className={styles['btnzuri']}>
                <div className={styles['frame51']}>
                  <span
                    className={` ${styles['text04']} ${projectStyles['textlg-medium']} `}
                  >
                    <span>Zuri Team</span>
                  </span>
                </div>
              </div>
              <div className={styles['books']}>
                <div className={styles['frame52']}>
                  <span
                    className={` ${styles['text06']} ${projectStyles['textlg-medium']} `}
                  >
                    <span>Zuri Books</span>
                  </span>
                </div>
              </div>
              <div className={styles['bookpython']}>
                <div className={styles['frame53']}>
                  <span
                    className={` ${styles['text08']} ${projectStyles['textlg-medium']} `}
                  >
                    <span>Python Books</span>
                  </span>
                </div>
              </div>
              <div className={styles['pitch']}>
                <div className={styles['frame54']}>
                  <span
                    className={` ${styles['text10']} ${projectStyles['textlg-medium']} `}
                  >
                    <span>Background Check for Coders</span>
                  </span>
                </div>
              </div>
              <div className={styles['bookdesign']}>
                <div className={styles['frame55']}>
                  <span
                    className={` ${styles['text12']} ${projectStyles['textlg-medium']} `}
                  >
                    <span>Design Books</span>
                  </span>
                </div>
              </div>
              <div className={styles['contact']}>
                <div className={styles['frame56']}>
                  <span
                    className={` ${styles['text14']} ${projectStyles['textlg-medium']} `}
                  >
                    <span>Contact Me</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['social-section']}>
          <div className={styles['container1']}>
            <div className={styles['content2']}>
              <div className={styles['socialicons']}>
                <div className={styles['slack']}>
                  <div className={styles['slack1']}>
                    <img
                      src="/playground_assets/vectori3681-msm9.svg"
                      alt="vectorI3681"
                      className={styles['vector']}
                    />
                    <img
                      src="/playground_assets/vectori3681-j0pn.svg"
                      alt="vectorI3681"
                      className={styles['vector1']}
                    />
                    <img
                      src="/playground_assets/vectori3681-cfrb.svg"
                      alt="vectorI3681"
                      className={styles['vector2']}
                    />
                    <img
                      src="/playground_assets/vectori3681-2dyh.svg"
                      alt="vectorI3681"
                      className={styles['vector3']}
                    />
                  </div>
                </div>
                <img
                  src="/playground_assets/socialicon36819-ap9b.svg"
                  alt="Socialicon36819"
                  className={styles['socialicon']}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tester