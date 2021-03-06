import React, { FC, useEffect } from 'react';
import Page from '@honzon-platform/apps/components/page';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@honzon-platform/apps/store/actions';
import { assets, airDropAssets } from '@honzon-platform/apps/config';
import { AirDrop } from './components/airdrop';
import { Balance } from './components/balance';
import TransferHistory from './components/transfer-history';
import { Box } from '@material-ui/core';
import { accountSelector } from '@honzon-platform/apps/store/account/selectors';
import { SelectAccount } from '@honzon-platform/apps/components/select-account';

const Wallet: FC = () => {
    const dispatch = useDispatch();
    const account = useSelector(accountSelector);

    useEffect(() => {
        // fetch user asset balance
        dispatch(actions.account.fetchAssetsBalance.request(Array.from(assets.keys())));
        // fetch user airdrop
        dispatch(actions.account.fetchAirdrop.request(Array.from(airDropAssets.keys())));
        // load tx record
        dispatch(actions.app.loadTxRecord());
        // load price
        dispatch(actions.chain.fetchPricesFeed.request(Array.from(assets.keys())));
    }, []);

    if (!account) {
        return null;
    }

    return (
        <Page title={account.address} style={{ maxWidth: 1200 }}>
            <Balance />
            <Box padding={2} />
            <AirDrop />
            <Box padding={2} />
            <TransferHistory />
        </Page>
    );
};

export default Wallet;
