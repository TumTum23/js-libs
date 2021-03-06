// Copyright 2015-2019 Parity Technologies (UK) Ltd.
// This file is part of Parity.
//
// SPDX-License-Identifier: MIT

export type LoggerFunction = (namespace: string) => (log: string) => void;
