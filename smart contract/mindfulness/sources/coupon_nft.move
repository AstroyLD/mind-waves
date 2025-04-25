// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

module mindfulness::coupon_nft;

use std::string;
use sui::event;
use sui::package;
use sui::display;
use sui::url::{Self, Url};

/// An example NFT that can be minted by anybody
public struct CouponNFT has key, store {
    id: UID,
    /// Name for the token
    name: string::String,
    /// Description of the token
    description: string::String,
    /// URL for the token
    url: Url,
    /// TODO: allow custom attributes
    image_url: string::String

}

/// Metadata for NFT which is used as witness and can be dropped
public struct COUPON_NFT has drop {}

fun init(witness: COUPON_NFT, ctx: &mut TxContext) {
    let publisher = package::claim(witness, ctx);

    let keys = vector[
        string::utf8(b"name"),
        string::utf8(b"description"),
        string::utf8(b"image_url"),
    ];

    let values = vector[
        string::utf8(b"{name}"),
        string::utf8(b"{description}"),
        string::utf8(b"{image_url}"),
    ];

    let mut display = display::new_with_fields<CouponNFT>(&publisher, keys, values, ctx);
    display::update_version(&mut display);

    transfer::public_transfer(publisher, ctx.sender());
    transfer::public_transfer(display, ctx.sender());
}


// ===== Events =====

public struct NFTMinted has copy, drop {
    // The Object ID of the NFT
    object_id: ID,
    // The creator of the NFT
    creator: address,
    // The name of the NFT
    name: string::String,
}

// ===== Public view functions =====

/// Get the NFT's `name`
public fun name(nft: &CouponNFT): &string::String {
    &nft.name
}

/// Get the NFT's `description`
public fun description(nft: &CouponNFT): &string::String {
    &nft.description
}

/// Get the NFT's `url`
public fun url(nft: &CouponNFT): &Url {
    &nft.url
}

// ===== Entrypoints =====

#[allow(lint(self_transfer))]
/// Create a new devnet_nft
public fun mint_to_address(
    name: vector<u8>,
    description: vector<u8>,
    url: vector<u8>,
    image_url: vector<u8>,
    recipient: address,
    ctx: &mut TxContext,
) {
    let sender = ctx.sender();
    let nft = CouponNFT {
        id: object::new(ctx),
        name: string::utf8(name),
        description: string::utf8(description),
        url: url::new_unsafe_from_bytes(url),
        image_url: string::utf8(image_url),
    };

    event::emit(NFTMinted {
        object_id: object::id(&nft),
        creator: sender,
        name: nft.name,
    });

    transfer::public_transfer(nft, recipient);
}


/// Transfer `nft` to `recipient`
public fun transfer(nft: CouponNFT, recipient: address, _: &mut TxContext) {
    transfer::public_transfer(nft, recipient)
}

/// Update the `description` of `nft` to `new_description`
public fun update_description(
    nft: &mut CouponNFT,
    new_description: vector<u8>,
    _: &mut TxContext,
) {
    nft.description = string::utf8(new_description)
}

/// Permanently delete `nft`
public fun burn(nft: CouponNFT, _: &mut TxContext) {
    let CouponNFT { id, name: _, description: _, url: _, image_url: _ } = nft;
    id.delete()
}