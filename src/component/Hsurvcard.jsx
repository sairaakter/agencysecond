export default function Hsurvcard({ item, hsrsty, carearbox }) {
  return (
    <div>
      <div className={hsrsty.solution_cards_box}>
        <div className={hsrsty.solution_card}>
          <div className={hsrsty.hover_color_bubble}></div>
          <div className={`${hsrsty.box} ${carearbox}`}>
            <div className={hsrsty.icon}>
              <div className={hsrsty.image}>
                <a className={hsrsty.s_fexing}>
                  <img src={item.imggg} className="img-fluid" />
                  <h3 className={hsrsty.title_sm}>{item.title}</h3>
                </a>
              </div>
              <div className={hsrsty.info}>
                <h3 className={hsrsty.title}>{item.title}</h3>
                <p>{item.description}</p>
                <div className={hsrsty.more}>
                  <a href="#" title="Title Link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
