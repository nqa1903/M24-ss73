import Add from "./components/Add";
import Todo from "./components/Todo";

export default function App() {
  return (
      <>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card">
                  <div className="card-body p-5">
                    <Add></Add>
                    {/* Tabs navs */}
                    <ul className="nav nav-tabs mb-4 pb-2">
                      <li className="nav-item" role="presentation">
                        <a className="nav-link active">Tất cả</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link">Đã hoàn thành</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link">Chưa hoàn thành</a>
                      </li>
                    </ul>
                    {/* Tabs navs */}
                    {/* Tabs content */}
                    <Todo></Todo>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Modal xác nhận xóa
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-header-custom">
              <h5>Xác nhận</h5>
              <i className="fas fa-xmark" />
            </div>
            <div className="modal-body-custom">
              <p>Bạn chắc chắn muốn xóa công việc quét nhà?</p>
            </div>
            <div className="modal-footer-footer">
              <button className="btn btn-light">Hủy</button>
              <button className="btn btn-danger">Xóa</button>
            </div>
          </div>
        </div> */}
        {/* Modal cảnh báo lỗi
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-header-custom">
              <h5>Cảnh báo</h5>
              <i className="fas fa-xmark" />
            </div>
            <div className="modal-body-custom">
              <p>Tên công việc không được phép để trống.</p>
            </div>
            <div className="modal-footer-footer">
              <button className="btn btn-light">Đóng</button>
            </div>
          </div>
        </div> */}
      </>
  );
}
