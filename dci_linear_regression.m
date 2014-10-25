dataset = csvread('dci_dataset.csv');
dataset = dataset(randperm(size(dataset,1)), :);

num_rows = size(dataset, 1); % total number of examples
num_cols = size(dataset, 2); % number of feature columns (remove y, add bias)

X = dataset(:, 1:(end-1));
X = [ones(num_rows, 1) X];
y = dataset(:, num_cols);

% separate into X/y_train, X/y_test, and X/y_cv
train_boundary = floor(num_rows * .6);
X_train = X(1:train_boundary, :);
y_train = y(1:train_boundary, :);

X_test = X((train_boundary+1):end, :);
y_test = y((train_boundary+1):end, :);
test_boundary = floor(size(X_test, 1)/2);

X_cv = X_test(1:test_boundary, :);
y_cv = y_test(1:test_boundary, :);

X_test = X_test((test_boundary+1):end, :);
y_test = y_test((test_boundary+1):end, :);
% train linear regression with linear hypothesis, normal equation

theta = normalEqn(X_train, y_train);
J_train = computeCostMulti(X_train, y_train, theta);
J_test = computeCostMulti(X_test, y_test, theta);
J_cv = computeCostMulti(X_cv, y_cv, theta);

fprintf('Cost on training set: \n');
fprintf('%f \n', J_train);

fprintf('Cost on validation set: \n');
fprintf('%f \n', J_cv);

fprintf('Cost on test set: \n');
fprintf('%f \n', J_test);

%% PREDICT THIS SHIT NIGGA

predicted_score = [1 2 2014 6 92.85 93.1 94.075 94.05] * theta;

fprintf('Predicted Score: %f \n', predicted_score);