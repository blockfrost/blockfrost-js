import React from 'react';
import { ArrowDown, ArrowUp } from 'react-feather';
import { Order } from 'types';

interface Props {
  page: number;
  order: Order;
  setPage: (page: number) => void;
  setOrder: (order: Order) => void;
  hasNextPage: boolean;
}

function Buttons({ page, setPage, order, setOrder, hasNextPage }: Props) {
  return (
    <div className="wrapper">
      <button
        onClick={async () => {
          setOrder(order === 'desc' ? 'asc' : 'desc');
          setPage(1);
        }}
        className="btn btn-sm pd-x-15 btn-outline btn-uppercase mg-l-5"
      >
        ORDER BY AGE {order === 'desc' ? <ArrowDown /> : <ArrowUp />}
      </button>
      <button
        onClick={async () => {
          setPage(page - 1);
        }}
        disabled={page === 1}
        className="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"
      >
        previous page
      </button>
      <button
        onClick={async () => {
          setPage(page + 1);
        }}
        disabled={!hasNextPage}
        className="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"
      >
        next page
      </button>
      <style jsx>{`
        .wrapper {
        }
      `}</style>
    </div>
  );
}

export { Buttons };
