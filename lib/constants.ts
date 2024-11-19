export const PIECES: { [key: string]: { symbol: string; name: string } } = {
  K: { symbol: "\u2654", name: "white king" },
  Q: { symbol: "\u2655", name: "white queen" },
  R: { symbol: "\u2656", name: "white rook" },
  B: { symbol: "\u2657", name: "white bishop" },
  N: { symbol: "\u2658", name: "white knight" },
  P: { symbol: "\u2659", name: "white pawn" },
  k: { symbol: "\u265A", name: "black king" },
  q: { symbol: "\u265B", name: "black queen" },
  r: { symbol: "\u265C", name: "black rook" },
  b: { symbol: "\u265D", name: "black bishop" },
  n: { symbol: "\u265E", name: "black knight" },
  p: { symbol: "\u265F", name: "black pawn" },
};

export const SAMPLE_FEN_POSITIONS_ARRAY = [
  [
    "2k1K3/8/2N5/8/8/8/8/2B5",
    "2K1k3/8/8/8/7p/8/6P1/8",
    "2K1n3/k7/8/8/8/8/8/3R4",
    "2K2k2/2R5/7N/8/8/8/8/8",
    "2K2k2/8/8/6Q1/8/8/7B/8",
    "2k2r2/4Q3/4K3/8/8/8/8/8",
    "2k3b1/8/8/8/8/8/8/1R4K1",
    "2K3k1/7b/8/6n1/8/8/8/8",
    "2k3K1/8/8/8/8/q4B2/8/8",
    "2k3N1/5K2/8/8/8/8/6P1/8",
    "2k3q1/P7/8/8/3K4/8/8/8",
    "2K4B/3Q4/8/8/4k3/8/8/8",
    "2K4k/8/8/8/7n/3Q4/8/8",
    "2k4K/Q6P/8/8/8/8/8/8",
    "2k5/1N1N4/8/8/8/2K5/8/8",
    "2k5/1n6/2K5/8/8/8/8/2R5",
    "2k5/1n6/4K3/8/8/8/8/7R",
    "2K5/1P6/2k5/4R3/8/8/8/8",
    "2K5/1P6/k7/1R6/8/8/8/8",
    "2K5/1P6/k7/q7/8/8/8/8",
    "2K5/2B5/4k3/8/5Q2/8/8/8",
    "2K5/2B5/8/3k4/8/8/2Q5/8",
    "2k5/2N5/2K5/8/8/8/8/2Q5",
    "2K5/2P3k1/2R5/8/8/8/8/8",
    "2K5/2P5/2k5/7Q/8/8/8/8",
    "2k5/2P5/2R5/7K/8/8/8/8",
    "2k5/2r5/3K4/1Q6/8/8/8/8",
    "2k5/2r5/3K4/8/1Q6/8/8/8",
    "2K5/3N4/2k5/8/8/8/8/2r5",
    "2K5/3N4/4k3/2Q5/8/8/8/8",
    "2K5/3p4/3N4/8/8/8/6k1/8",
    "2K5/3p4/8/8/8/8/4P3/5k2",
    "3N4/8/8/8/8/p7/k1K5/8",
    "3N4/K2Nk3/8/8/8/8/8/8",
    "3Nk3/8/8/2K5/8/8/3Q4/8",
    "3nk3/Q7/8/8/7K/8/8/8",
    "3Q2K1/8/6k1/8/6P1/8/8/8",
    "3Q3K/3P4/8/8/8/4k3/8/8",
    "3Q4/1P6/8/8/8/8/7k/3K4",
    "3Q4/1P6/8/8/8/8/8/3K2k1",
  ],
  [
    "1b1K4/2n5/8/8/8/8/4P3/7k",
    "1B1k4/2R1N3/8/8/8/8/8/4K3",
    "1B1k4/5K2/8/8/8/7B/8/5N2",
    "1B1k4/7R/8/N7/8/8/8/7K",
    "1B2B1k1/4p3/7K/8/8/8/8/8",
  ],
  [
    "1B1K1R2/8/2B1k3/8/8/2P5/8/8",
    "1b1k2b1/8/7n/8/8/K7/8/5R2",
    "1b1K4/3B4/8/8/8/R6r/8/7k",
    "1B1K4/3N4/2k3B1/8/8/4P3/8/8",
    "1B1K4/8/8/8/2N5/8/4pp2/4k3",
  ],
  [
    "1b1B1k2/5B2/1q4P1/8/8/8/4K3/8",
    "1B1b4/8/8/8/8/4P2p/5K2/5N1k",
    "1B1b4/8/R7/5k1p/6p1/3K4/8/8",
    "1b1Bk3/4P3/8/7K/8/4P3/5Q2/8",
    "1B1k2K1/3P4/1N2P3/6P1/8/8/8/8",
  ],
  [
    "1b1k4/1P3K2/2PB4/2R1P3/8/8/8/8",
    "1b1K4/8/4pn2/4k3/1N1Rn3/8/8/8",
    "1B1N4/7B/8/k6p/3p4/8/p5K1/8",
    "1B1N4/8/8/b6p/5Pk1/8/6K1/4N3",
    "1B1R4/7N/8/3B4/2Pk4/3p4/3K4/8",
  ],
  [
    "1b1B4/2p1p3/R5B1/3k4/2p5/8/8/K7",
    "1b1B4/3K4/3p4/8/3k4/3P4/2P1pp2/8",
    "1b1B4/8/8/2K5/8/4P3/3Rbk2/N3r3",
    "1B1bR3/2n5/4Pp2/4k3/8/3Q2K1/8/8",
    "1B1K4/1p6/kP6/p7/P5p1/8/1R6/8",
  ],
  [
    "1b1B4/5K2/b3B3/2p5/3k4/2N2P2/8/2Q5",
    "1B1k1K2/2Rb4/Bn3N2/3n4/3N4/8/8/8",
    "1b1k2K1/p2B4/P2n4/2N5/1Q6/B7/8/8",
    "1b1k4/1B4p1/1R4P1/8/2b2n2/2B5/7K/8",
    "1B1K4/1k6/1p1p4/1P6/1bN5/RB6/8/8",
  ],
  [
    "1B1b2R1/1Q2p3/2P1kN2/6P1/8/1K6/4N3/8",
    "1b1B4/6pp/1Q2N3/3pk3/2p5/6N1/6K1/8",
    "1B1bR3/8/3nbN2/4k3/4pnB1/8/8/6K1",
    "1B1k2Nr/p2p2pp/Kb6/4Q3/8/8/8/8",
    "1B1k4/1n4K1/2Pp4/3BP3/N7/6b1/7R/8",
  ],
  [
    "1b1B4/1N3Q2/KP4n1/4k3/3p4/4pP2/6P1/8",
    "1b1B4/4Np2/5pp1/1n2kB2/8/8/7P/3QK3",
    "1b1B4/6n1/7R/4kP2/2K4R/3B1P2/4n3/7N",
    "1B1b4/8/1R1n4/Kn1Pk3/1P3p2/8/1PR5/8",
    "1B1b4/8/K5kr/8/R4P2/5p1p/4n3/1r3b2",
  ],
  [
    "1b1B1N2/8/2p1P2P/4k3/6P1/7b/3Q1Pp1/6K1",
    "1b1B2RK/rrp5/1p3N1k/8/7p/7b/4n3/8",
    "1b1B3k/1p6/2PP4/8/2R3p1/N6P/1q4P1/7K",
    "1B1b4/1K2pp2/2P1k3/2QN1p1r/4p3/1B6/8/8",
    "1b1Bb3/8/7R/8/1r2p3/1p1k1n2/1p1r4/3R1K2",
  ],
  [
    "1b1B4/2p2p2/1p6/3Bk2r/1PQ5/3Pp3/K1P5/8",
    "1b1B4/3p2K1/4b3/4pp1k/8/7P/Q3NRP1/7n",
    "1b1B4/4N3/5p2/4kB1p/4bN1n/6R1/2pQ4/2K5",
    "1B1b4/4p3/1kp1P3/2N2P2/2Pp4/1p2p3/1K5Q/8",
    "1b1Bb3/1P1kP3/qr2r3/1n2P3/6p1/8/4K3/5R2",
  ],
  [
    "1b1B1q2/r1p1n3/R3nk2/1p6/1p6/4Pb2/2K1P3/8",
    "1B1b2K1/3N1R2/2r5/7p/n1b2P2/3qkp2/7n/3r4",
    "1b1B2rr/3n4/4k3/8/p2P1p2/1pp5/2b1p3/1QK5",
    "1B1b4/2n5/3p2Q1/4k3/5pR1/2P3P1/2KRP3/4Nq2",
    "1b1B4/2ppr3/5pp1/3k3n/7N/1P1p1P2/2P4K/8",
  ],
  [
    "1b1B1k2/R1p2NN1/r1Q3p1/r5p1/b7/6K1/B7/5R2",
    "1b1B1N2/1r2pB2/1N1k1P2/n1R2b2/3P1P2/4K1Q1/8/8",
    "1B1b1N2/6r1/3N4/P1kP4/2P4R/K1p4b/n1Q1P3/8",
    "1B1b1NK1/N6B/Rp1p1p1R/3k4/8/1P1nQ3/5n2/8",
    "1B1b1R2/2n1p3/4p3/1n3p2/4k3/2pR1N2/2Np4/3K1Q2",
  ],
  [
    "1b1B1n2/5R2/2K5/pp2k3/2R1p3/1rp2p1B/Q5p1/5n2",
    "1B1b1N2/p1n1P1p1/Qn1k2P1/R2N4/1P5K/8/8/3R3B",
    "1b1B1qr1/5p2/3k1Np1/1pRPN3/1np5/5Kp1/4Q3/8",
    "1b1B1r2/2pQ3B/4pN2/2q1k1P1/6b1/2pRN1P1/5K2/8",
    "1b1B2K1/1r4p1/pp2B1p1/8/3pk3/1n3Np1/N1n5/5Q2",
  ],
  [
    "1b1B1NR1/1K2Rprp/1p4rq/5Nkp/3Q4/7B/6n1/8",
    "1b1B1qr1/5p2/3k1Np1/1pRPN3/1np5/2p2Kp1/4Q3/8",
    "1b1B2b1/2p5/4P1NK/1Q3P2/1p1k3N/2p2Pp1/r4p2/5n2",
    "1B1b2b1/n5Qn/2P1kP2/1pP2p2/1P1R4/2K1Nq2/8/4R3",
    "1B1b2b1/n5Qn/RNP1kPp1/r1p1p3/4P3/p7/K7/8",
  ],
  [
    "1B1b1N2/1rp1k1K1/1r3Np1/1bPRPp2/p4Q2/4R3/6p1/8",
    "1b1B1n2/7n/1Q5p/1p1pk2P/1Pb2NP1/4pP1N/4p3/4K3",
    "1B1b1Q1K/1pr1r3/nN1k4/3B1P2/P4Pp1/1N3p2/3R4/2R5",
    "1b1B1QN1/3nr1P1/1R3rB1/2N3kP/4R1p1/5PP1/5P2/4K3",
    "1B1b2B1/1N4NK/8/1R1PP2R/2npk1P1/3nppP1/8/Q7",
  ],
  [
    "1B1b1K2/3P1R2/1Np1k3/5pP1/1nRpb1P1/2Qp4/2N3p1/6q1",
    "1B1b1N2/2n2K2/1P1kppNp/3B1R1Q/1P4n1/5P2/4P3/3R1r2",
    "1B1b1Q1n/1rrR2Kb/4N3/3NkPPR/2B1p3/6p1/4p3/6q1",
    "1b1B1rR1/3Q4/2N2p2/2p4p/1nN2k2/3p3P/4bK2/1qn1R2B",
    "1B1b2B1/1Npp4/3Pn2N/P7/K1k1b2R/2pR1p2/2Pn2p1/8",
  ],
  [
    "1b1B1N2/4rnp1/RNq3P1/3pk3/1Pp3P1/5pP1/2Q3R1/2K4B",
    "1b1B1Nb1/rRqp1kPp/1p5P/8/2N2Pp1/p3R3/B3Q3/2K5",
    "1B1b1R2/2r1p2B/2q2n1Q/2PPkN2/r1n2N1K/2P2P2/4b3/4R3",
    "1b1B1R2/3P4/1QK1pNp1/R5P1/1p2Nk1n/3p2p1/3p2n1/1b1B4",
    "1b1B1r2/6Np/7r/2PP2Pn/2K1k1Pp/3NPpn1/p1B2P2/8",
  ],
  [
    "1B1b1K2/P2N1Q2/2ppp1Np/3k2p1/R7/3Pnrn1/2p3B1/3b3q",
    "1B1b1N1q/3p1p2/2p4R/3kN1R1/p2Pn3/4Prrb/2B2nQ1/K7",
    "1b1B1N2/1pP2p1r/b7/R2ppk2/8/R2n1NPP/2r1Q3/1B2nK2",
    "1b1B1R2/4Nb1p/2R4n/1NpPk3/1p2p2P/p5PK/B2Q3n/5r2",
    "1B1b2K1/2P1pRpP/1n1p4/2Npkp2/5p2/1bP2PP1/3pP3/Q7",
  ],
  [
    "1b1B1K2/nr1R1P1p/1N2k2p/2P2Rn1/B1pP3N/3QP3/6b1/5r1q",
    "1B1b1q2/8/BP2P3/1rP1r3/3kppbR/QPNnp3/5P1K/3RN3",
    "1B1b1R2/K1n1pn1N/pp2B1Qp/1r2k2r/6P1/qbP3P1/8/2NR4",
    "1b1B1rBN/1P1ppqR1/KPpk1p2/1RN4Q/5p2/1n3P2/2P2n2/8",
    "1B1b3N/1K3Qr1/p2r4/Rb1nkBP1/1ppN4/2n1PR1p/5P2/7q",
  ],
  [
    "1b1B4/4R3/3p1PPp/1P1k1K1p/1P2Rp1r/3Np3/b3rpB1/2QN1n2",
    "1B1b4/8/p4pKp/qpQN2pr/2p1k1BP/2p2RP1/1NP1r2p/1b6",
    "1B1b4/r1rB1p2/2R2N2/3PkPRP/1NK1pnP1/4p1Qq/n3P1b1/8",
    "1b1BRN1q/3p1P1p/3n1p2/2p1Pk1B/1p1Pn1R1/6P1/Q2pr3/K2N4",
    "1B1K2B1/1Pp1N3/Nb1k4/p5P1/p1pP2p1/1n3nPq/1R4p1/3Q1R1r",
  ],
  [
    "1b1B1r2/4NpQ1/q6p/2PRN1P1/4pk2/p1n1p1pB/3P2Pr/K3Rn2",
    "1b1B2n1/1B4r1/R2pp1Rr/1P2kp2/1P1pPp2/KN1Q1pq1/2P1n3/5b2",
    "1B1bK3/p1rpP3/6P1/pQPk1Ppp/2N1p2q/r2n1R2/2N3B1/2n1R3",
    "1b1K4/3B1Ppb/1pRpN2p/3kp2r/P1p4r/q2pQP1n/n6B/5N2",
    "1B1n1rB1/5q2/N1pPn1p1/1ppk1P1R/1p1PN1P1/2PQ1b2/8/1Kb1R3",
  ],
  [
    "1B1N1R2/5n1B/4p2p/1Ppk2p1/R1b1p1r1/2pPKprq/3P1P2/1nb4Q",
    "1B1n3r/1pP1Qpp1/b1k4q/RR1P1P1p/1N2p3/1Bp1r3/2P1n2b/5B1K",
    "1B1n4/1p1K1n1p/bPp2Q1P/b1RN2p1/R2rkpr1/5p2/2Pp1q2/1B3N2",
    "1B1N4/3pn3/nP1N4/R1QPk2r/2pbBRP1/5KP1/2pprpP1/3bq3",
    "1B1nR2Q/3r4/2PPPPPp/b1p1k3/K1P1B2P/ppp5/1R1N4/rN1b4",
  ],
  [
    "1B1N1R2/3Q3n/4P1pP/n1p4R/2p1k1B1/1pP2p1P/1P1ppP2/Kb1rr2N",
    "1b1N4/qb1r4/p2rp3/2PkPp1P/P1R1p1RN/1p1BB3/1Pp1P1KQ/1n6",
    "1b1q2nr/2ppppkb/1pn3p1/8/2r3Q1/1RP1P3/1P2PPP1/1NB1KB1R",
    "1B2b3/P1pRR3/pk2BP2/pn3Prr/4K1p1/3PP1b1/2N2ppq/1Q1N3n",
    "1B2Nrqn/2r2Qpp/2R1N1p1/1B2k3/1PK2pP1/1PPpbPP1/8/1b2Rn2",
  ],
  [
    "1b1Br1b1/p2Pr3/R1B1p1Pp/1p2kp1Q/1P2N1p1/NP4PP/2P1p3/2K1Rn2",
    "1b2R3/3b2Bp/2q1p3/3n1p1P/pP2Nk1N/KpPPpPp1/1Pr1n3/3Br2Q",
    "1B3nkr/3pQ2b/B1pPp1pK/2PnP3/p5Rp/PpNP1p1N/1P3P2/R7",
    "1B6/5Q2/BP6/KN1P1RP1/4k1NR/p1p2p1p/P1pqpp1P/1nrbbrn1",
    "1b6/r1pQpp2/p1KP4/1r4pR/q1kB2pR/Pp4P1/P1P3nP/1N1N1n1b",
  ],
  [
    "1b1K3n/2pppprp/1p4p1/1p6/b1P2B2/RP2P1R1/r1PPQPPP/NB5k",
    "1b5N/NnpppprR/1pP3pp/2p5/5K1R/1B1P1b2/PP1RPP1P/k5rq",
    "1B6/8/kpbppp2/p2P2p1/P3PPB1/KRbp1nPR/nrP3N1/qNr3Q1",
    "1b6/b1p3N1/rpp1P3/rpp2PRP/1QpB1N1N/N1K2R2/kn3P1R/b2B3N",
    "1kB2b2/p1rn1p1p/2rp1nb1/3N2p1/3Pp1PQ/P1P1P2P/K3NP2/2bRRB2",
  ],
  [
    "1bbkq1Bn/1rpppp2/1p4pp/1P3rP1/6PK/5PRQ/2PPPRRN/5bN1",
    "1n2k3/ppp1n2p/4p3/6pq/2r5/2b2p1b/PPPPPPPP/RNBQKBNR",
    "1nbqkbnr/pppppppp/8/8/8/8/PPPP1PPP/RNBQKBNR",
    "1rb1kbrn/1ppppppp/p5N1/8/8/6N1/PPPPPPPP/R1BQKn1R",
    "2b2qkr/1ppnnppp/3p1p2/pNR1Q3/7P/b1P5/P1PPPPPB/4KBN1",
  ],
  [
    "1b6/b1p3N1/rpppP3/rpqp2RP/1QbB1N1N/N1KP1R2/kn3P1R/b2B3N",
    "1n6/2p5/PPP2p2/rprPP3/bnp1RP2/K2ppRP1/NqQp1pP1/kBb1N3",
    "1nb1kbnr/1ppp1ppp/4p3/p7/6Pq/5B2/PPPPP2P/RNBQKrNR",
    "2Brkbnr/2pppppp/pqn5/1p6/8/4P3/PPPP1PPP/RNBQK1NR",
    "2kn4/1pp2ppp/2n1p3/p1p2b2/q1r1r3/b1P5/PP1PPPPP/RNB1KBNR",
  ],
  [
    "1KB1R1b1/pp2pp1n/1b4p1/2pp3p/P2N2RP/BP3PP1/Q1PPP2q/1Nrkr1n1",
    "1n1NK1nB/1PP1PPp1/PRrbpqp1/QRNkR1p1/BRbrpp2/1p1p4/P7/8",
    "1n1qk1nr/2pp1Npp/1p2pR2/p3B2B/1P2PpK1/b1NP4/P1P1RPPP/2Qb1r2",
    "2b1kbnr/p1p1pppp/1pn1Qr2/3p3B/q5P1/4PN1R/PPPP1P1P/RNB4K",
    "2n3Br/nPNPPPNr/QPbPqkPp/BPRRbrpK/1ppp1p2/8/7p/8",
  ],
];
