---
title: "Notes"
date: 2022-06-13T20:55:37+01:00
draft: false

showDate: false
showDateUpdated: false
showHeadingAnchors: false
showPagination: false
showReadingTime: false
showTableOfContents: true
showTaxonomies: false
showWordCount: false
showSummary: false
sharingLinks: false
---

{{< katex >}}

\documentclass{article}
\usepackage{amsmath}
\usepackage{tikz}
\usepackage{multicol}

\begin{document}

\section\*{Graph of Linear Equations}

\subsection\*{1. The linear equation \(3x - 1 = 10\) has:}
\begin{itemize}
\item One solution \(x = \frac{11}{3}\)
\item Two solutions
\item Infinite solutions
\item No solution
\end{itemize}
\textbf{Ans: Unique solution \(x = \frac{11}{3}\)}

\begin{center}
\begin{tikzpicture}
\draw[->] (-1,0) -- (4,0) node[right] {$x$};
\draw[->] (0,-1) -- (0,4) node[above] {$y$};
\draw[thick,red] (11/3,-1) -- (11/3,4);
\node at (11/3,-0.5) {$\frac{11}{3}$};
\node[above right] at (11/3,0) {$(\frac{11}{3}, 0)$};
\end{tikzpicture}
\end{center}

\subsection\*{2. The equation \(3x + 10 = 0\) will have:}
\begin{itemize}
\item One solution \(x = -\frac{10}{3}\)
\item Two solutions
\item Infinite solutions
\item No solution
\end{itemize}
\textbf{Ans: Unique solution \(x = -\frac{10}{3}\)}

\begin{center}
\begin{tikzpicture}
\draw[->] (-4,0) -- (1,0) node[right] {$x$};
\draw[->] (0,-2) -- (0,2) node[above] {$y$};
\draw[thick,blue] (-10/3,-2) -- (-10/3,2);
\node at (-10/3,-0.5) {$-\frac{10}{3}$};
\node[above right] at (-10/3,0) {$\left(-\frac{10}{3}, 0\right)$};
\end{tikzpicture}
\end{center}

\subsection\*{3. Solution of equation \(x - 2y + 4 = 0\):}
\begin{description}
\item[Case I:] \(x = 0\)
\[
0 - 2y + 4 = 0 \quad \Rightarrow \quad y = 2 \quad \text{Solution: (0, 2)}
\]
\item[Case II:] \(y = 0\)
\[
x - 0 + 4 = 0 \quad \Rightarrow \quad x = -4 \quad \text{Solution: (-4, 0)}
\]
\end{description}

\begin{center}
\begin{tikzpicture}
\draw[->] (-5,0) -- (2,0) node[right] {$x$};
\draw[->] (0,-1) -- (0,3) node[above] {$y$};
\draw[thick,green] (-4,0) -- (0,2);
\node at (0,2.5) {$(0, 2)$};
\node at (-4,-0.5) {$(-4, 0)$};
\end{tikzpicture}
\end{center}

\subsection\*{4. The graph of linear equation \(x + 2y = 2\) cuts the y-axis at:}
\begin{itemize}
\item \((0, 1)\)
\item \((0, 2)\)
\item \((0, \frac{1}{2})\)
\item \((2, 0)\)
\end{itemize}
\textbf{Ans: \((0, 1)\)}

\subsection\*{5. Which of the following graphs represents \(x + y = 3\)?}
\begin{description}
\item[Case I:] \(x = 0\)
\[
0 + y = 3 \quad \Rightarrow \quad y = 3 \quad \text{Solution: (0, 3)}
\]
\item[Case II:] \(y = 0\)
\[
x + 0 = 3 \quad \Rightarrow \quad x = 3 \quad \text{Solution: (3, 0)}
\]
\end{description}

\begin{center}
\begin{tikzpicture}
\draw[->] (-1,0) -- (4,0) node[right] {$x$};
\draw[->] (0,-1) -- (0,4) node[above] {$y$};
\draw[thick,purple] (0,3) -- (3,0);
\node at (0,3.5) {$(0, 3)$};
\node at (3,-0.5) {$(3, 0)$};
\end{tikzpicture}
\end{center}

\section\*{General Equation:}
\[
L_1 = a_1x + b_1y + c_1 = 0
\]
\[
L_2 = a_2x + b_2y + c_2 = 0
\]

\subsubsection\*{Case I: Unique Solution}
\[
\frac{a_1}{a_2} \neq \frac{b_1}{b_2}
\]

\subsubsection\*{Case II: No Solution}
\[
\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}
\]

\subsubsection\*{Case III: Infinite Solutions}
\[
\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}
\]

\subsection\*{Find \(k\) if \(2x - ky + 7 = 0\) and \(cx - 12y + 15 = 0\) has no solution:}
\[
\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}
\]
\[
\frac{2}{c} = \frac{k}{-12} \neq \frac{7}{15} \quad \Rightarrow \quad k = \frac{24}{c}
\]

\subsection\*{Number of solutions of the set of linear equations:}
\[
x + 2y = 8
\]
\[
3x + 6y = 16
\]
\begin{itemize}
\item One
\item Two
\item Zero
\item Infinite
\end{itemize}
\textbf{Ans: Zero}

\[
\frac{a_1}{a_2} = \frac{1}{3}, \quad \frac{b_1}{b_2} = \frac{2}{6} \neq \frac{c_1}{c_2}
\]

\end{document}
{{< /katex >}}
