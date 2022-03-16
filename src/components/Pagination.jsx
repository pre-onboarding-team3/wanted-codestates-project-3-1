import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

const PaginationComponent = styled.div`
  position: relative;
  width: 220px;
  margin: 0 auto;
  ul {
    display: flex;
    margin: 0 auto;
    width: 140px;
    margin: 0 auto;
    justify-content: center;
    overflow: hidden;
    li {
      button {
        padding: 4px 7px;
        margin: 0 2px;
        background-color: transparent;
        border: 1px solid #ccc;
        box-sizing: border-box;
        color: gray;
        cursor: pointer;
        &.active {
          background-color: #6640ff;
          color: white;
          border: 1px solid #6640ff;
        }
      }
    }
  }
  div {
    button {
      width: 22px;
      height: 22px;
      position: absolute;
      top: 50%;
      margin-top: -11px;
      border: 1px solid #ccc;
      background-color: transparent;
      color: gray;
      cursor: pointer;
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(2) {
        right: 0;
      }
      svg {
        vertical-align: top;
      }
    }
  }
`;

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);
  const [fivePage, setFivePage] = useState(0);

  const pageContentCount = 7;
  const totalCount = 54;
  const totalPageCount = Math.ceil(totalCount / pageContentCount);

  useEffect(() => {
    let paginationNumber = [];
    for (let i = 1; i <= totalPageCount; i++) {
      paginationNumber.push(i);
    }
    setTotalPage(paginationNumber);
  }, []);

  const handlePageCount = bool => {
    if (bool) {
      setFivePage(fivePage - 1);
    } else {
      setFivePage(fivePage + 1);
    }
  };

  return (
    <>
      <div>{page}</div>
      <PaginationComponent>
        <div>
          <button onClick={() => handlePageCount(true)}>
            <AiOutlineDoubleLeft />
          </button>
          <button onClick={() => handlePageCount(false)}>
            <AiOutlineDoubleRight />
          </button>
        </div>
        <ul>
          {totalPage
            .slice(fivePage * 5, fivePage * 5 + 5)
            .map((value, index) => (
              <li key={index}>
                <button
                  className={page === value ? 'active' : ''}
                  onClick={() => setPage(value)}
                >
                  {value}
                </button>
              </li>
            ))}
        </ul>
      </PaginationComponent>
    </>
  );
};

Pagination.propTypes = {};

export default Pagination;