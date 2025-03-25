import comttsty from "../style/Comontittle.module.css";

export default function Comontittle({
  svvg,
  hone,
  hpp,
  diff_two,
  diffimg,
  diffbuton,
}) {
  return (
    <div className={comttsty.comon_tittle}>
      <div className="container cus_container">
        <div className="row">
          <div className="col-lg-12">
            <div className={comttsty.cttl_content}>
              <div className={comttsty.cttl_one}>
                <div className={comttsty.higrt}>{svvg}</div>

                <div className={`${comttsty.cttl_two} ${diff_two}`}>
                  {diffimg}
                  <h1>{hone}</h1>
                  <p>{hpp}</p>
                  {diffbuton}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
