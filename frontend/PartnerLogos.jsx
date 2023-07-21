// <Widget src={`9f8d4bf85f6c2169fccce1deb44c95a010f6b9e682f9887d8b56546c0d5312fe/widget/PartnerLogos`} />

const Images = styled.div`
    img {
        height: 50px;
        margin: 10px;
    }
`

const logos = [
    'https://ipfs.near.social/ipfs/bafkreidao2p4wbgb6wzuievwgnj73us37egaqinowst7pq6txkomzwg2fa',
    'https://ipfs.near.social/ipfs/bafkreid35mglojo2iiymnfp4p74a6hzz4a6ek6dryugmtfzuc2aahmoao4',
    'https://ipfs.near.social/ipfs/bafkreihx7soukgfkool5xfvvypyur3ygjorearsk45iiqzf7cdlpzcn2fi',
    'https://ipfs.near.social/ipfs/bafkreieal5vpu4naw33o6vcgkk5yn7s5amwubpf53rf6elja3zx5ewzfze',
    'https://ipfs.near.social/ipfs/bafkreihkugg2xajx6rczq5e25bnbh72rohyfeeiymubm4wwyysf3xpkeiy',
    'https://ipfs.near.social/ipfs/bafkreibtfjwp7qn7jfonocevduvyhfpv7cs4xzzqne44mwrbpcze3a5vda',
    'https://ipfs.near.social/ipfs/bafkreicx2lkdlt5uyn7wvj64q4rvw3nta2qpyowyi6yol4rvvvkxi2idyy',
    'https://ipfs.near.social/ipfs/bafkreiewp5ectp2al5mhdvvr7nortvvgdmvxu2iv656h4nh33jp4jqlnmy',
]

return (
    <Images>
        {logos.map((image, i) => {
            return (
            <img
                src={image}
                key={image}
            />
            );
      })}
    </Images>
)