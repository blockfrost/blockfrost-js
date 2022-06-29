import React, { useContext, useState } from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Buttons } from './Buttons';
import { hexToString, getFingerprint } from 'utils';
import { Order } from 'types';
import { useAssets } from 'hooks/useAssets';
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionToggle,
} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function Assets() {
  const [page, setPage] = useState<number>(1);
  const [order, setOrder] = useState<Order>('asc');
  const { assets, isAssetsError, isAssetsLoading, hasNextPage } = useAssets(
    page,
    order,
  );

  const ContextAwareToggle = ({
    eventKey,
    callback,
  }: {
    eventKey: string;
    callback?: (eventKey: string) => void;
  }) => {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    if (isCurrentEventKey) {
      return (
        <div className="d-flex align-items-center">
          <IoIosArrowUp
            size={25}
            role="button"
            className=""
            onClick={decoratedOnClick}
          />
        </div>
      );
    } else {
      return (
        <div className="d-flex align-items-center">
          <IoIosArrowDown
            size={25}
            role="button"
            className=""
            onClick={decoratedOnClick}
          />
        </div>
      );
    }
  };

  const ContextAwareContent = ({
    eventKey,
    asset,
  }: {
    eventKey: string;
    asset: string;
  }) => {
    const currentEventKey = useContext(AccordionContext);
    const isCurrentEventKey = currentEventKey === eventKey;

    if (isCurrentEventKey) {
      return <Body assetId={asset} />;
    } else {
      return <div />;
    }
  };

  return (
    <div className="wrapper">
      <div className="main-header p-3">
        <div className="main-header-left">
          <h3>Cardano Assets</h3>
        </div>
        <Buttons
          page={page}
          setPage={setPage}
          setOrder={setOrder}
          order={order}
          hasNextPage={hasNextPage}
        />
      </div>
      <Accordion>
        {isAssetsLoading && (
          <div className="mt-2">
            <Skeleton count={50} width="100%" height={77} />
          </div>
        )}
        {!isAssetsLoading &&
          !isAssetsError &&
          assets.map(asset => {
            const policyIdSize = 56;
            const assetNameInHex = asset.asset.slice(policyIdSize);
            const policyId = asset.asset.substr(0, policyIdSize);
            const assetName = hexToString(assetNameInHex);
            const fingerprint = getFingerprint(policyId, assetNameInHex);

            return (
              <Card key={asset.asset} className="mb-2">
                <Card.Header className="d-flex">
                  <div className="line-header">
                    <div className="left">
                      <ContextAwareToggle eventKey={asset.asset} />
                    </div>
                    <div className="right">
                      <Header
                        assetName={assetName}
                        quantity={asset.quantity}
                        fingerprint={fingerprint}
                      />
                    </div>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey={asset.asset}>
                  <Card.Body>
                    <ContextAwareContent
                      asset={asset.asset}
                      eventKey={asset.asset}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
      </Accordion>
      <div className="bottom-header-right p-3">
        <Buttons
          page={page}
          setPage={setPage}
          setOrder={setOrder}
          order={order}
          hasNextPage={hasNextPage}
        />
      </div>
      <style jsx>{`
        .wrapper {
          margin: 50px 0;
        }
        .bottom-header-right {
          display: flex;
          flex: 1;
          justify-content: flex-end;
        }
        .main-header {
          display: flex;
          justify-content: space-between;
        }
        .main-header-left {
        }
        .main-header-right {
        }
        .line-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
        }
        .left {
          margin-right: 10px;
        }
        .right {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export { Assets };
