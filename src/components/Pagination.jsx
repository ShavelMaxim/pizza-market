import React, { useContext } from "react";
import { ConfigProvider, Pagination as AntdPagination } from "antd";
import { AppContext } from "../context/context.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../redux/slices/paginationSlice.js";

export default function Pagination() {
  const { total } = useContext(AppContext);
  const activePage = useSelector((state) => state.pagination.activePage);
  const dispatch = useDispatch();

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#fe5f1e",
            colorText: "#2c2c2c",
            colorTextDisabled: "rgba(44, 44, 44, 0.35)",
            colorBorder: "#ffdf8c",
            colorBgContainer: "#ffffff",
            borderRadius: 30,
            controlHeight: 44,
          },
          components: {
            Pagination: {
              itemActiveBg: "#fe5f1e",
              itemInputBg: "#ffffff",
              itemLinkBg: "#ffffff",
            },
          },
        }}
      >
        <AntdPagination
          className="pagination"
          defaultCurrent={1}
          total={total} // Умножаем на 10, чтобы показать больше страниц
          align="center"
          current={activePage}
          onChange={(page) => {
            dispatch(setActivePage(page));
          }}
          pageSize={4}
          showSizeChanger={false} // если не нужно менять количество на странице
        />
      </ConfigProvider>
    </>
  );
}
